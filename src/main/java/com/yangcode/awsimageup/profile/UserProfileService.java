package com.yangcode.awsimageup.profile;

import com.yangcode.awsimageup.bucket.BucketName;
import com.yangcode.awsimageup.filestore.FileStore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;


import static org.apache.http.entity.ContentType.*;

@Service
public class UserProfileService {

    private final UserProfileDataAccessService userProfileDataAccessService;
    private final FileStore fileStore;

    @Autowired
    public UserProfileService(UserProfileDataAccessService userProfileDataAccessService,
                              FileStore fileStore) {
        this.userProfileDataAccessService = userProfileDataAccessService;
        this.fileStore = fileStore;
    }
    List<UserProfile> getUserProfile(){
        return userProfileDataAccessService.getUserProfiles();
    }

     void uploadProfileImage(UUID userProfileID, MultipartFile file) {
        //1. check image is not empty
        isFileEmpty(file);
        //2. If file is an image
        isImage(file);
        //3. The user exists in our database
        UserProfile user = getUserProfileOrThrow(userProfileID);

        //4. Grab some metadata from file is any
        Map<String, String> metadata = extractMetadata(file);
        //5. Store the image is s3 and update database(userProfileImageLink) with s3 image link
        String path = String.format("%s/%s", BucketName.PROFILE_IMAGE.getBucketName(), user.getUserProfileID());
        String filename = String.format("%s-%s",file.getOriginalFilename(), UUID.randomUUID());
        try {
            fileStore.save(path, filename, Optional.of(metadata), file.getInputStream() );
            user.setUserProfileImageLink(filename);
        } catch (IOException e) {
            throw new IllegalStateException(e);
        }


    }
    byte[] downloadUserProfileImage(UUID userProfileID) {
        UserProfile user = getUserProfileOrThrow(userProfileID);
        String path = String.format("%s/%s",
                BucketName.PROFILE_IMAGE.getBucketName(),
                user.getUserProfileID());

        return user.getUserProfileImageLink()
                .map(key -> fileStore.download(path, key))
                .orElse(new byte[0]);


    }

    private Map<String, String> extractMetadata(MultipartFile file) {
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));
        return metadata;
    }

    private UserProfile getUserProfileOrThrow(UUID userProfileID) {
        return userProfileDataAccessService
                .getUserProfiles()
                .stream()
                .filter(userProfile -> userProfile.getUserProfileID().equals(userProfileID))
                .findFirst()
                .orElseThrow(()-> new IllegalStateException(String.format("User profile %s not found", userProfileID)));
    }

    private void isImage(MultipartFile file) {
        if(!Arrays.asList(IMAGE_JPEG.getMimeType(),
                           IMAGE_PNG.getMimeType(),
                           IMAGE_GIF.getMimeType()).contains(file.getContentType())){
            throw new IllegalStateException("File muse be an image [" + file.getContentType() + "]");
        }
    }

    private void isFileEmpty(MultipartFile file) {
        if(file.isEmpty()){
            throw new IllegalStateException("can not upload empty file[" + file.getSize() + "]");
        }
    }


}
