package teamspiderman.backend.appuser;

import org.springframework.web.multipart.MultipartFile;
import teamspiderman.backend.Img.ImgService;
import teamspiderman.backend.bucket.BucketName;
import teamspiderman.backend.filestore.FileStore;
import teamspiderman.backend.registration.Token.ConfirmationToken;
import teamspiderman.backend.registration.Token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;

import static org.apache.http.entity.ContentType.*;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MSG =
            "email %s or password is incorrect";

    private final AppUserRepository appUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    private final FileStore fileStore;
    private final ImgService imgService;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return appUserRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(USER_NOT_FOUND_MSG, email)));
    }

    public String signUpUser(AppUser appUser) {

        boolean userExists = appUserRepository
                .findByEmail(appUser.getEmail())
                .isPresent();

        if (userExists) {

            // TODO check of attributes are the same and
            // TODO if email not confirmed send confirmation email.
            boolean userEnabled = appUserRepository.findByEmail(appUser.getEmail()).get().getEnabled();
            if(userEnabled){
                throw new IllegalStateException("email already taken");
            }
            else{
                throw new IllegalStateException("confirmation email has been sent");
            }
        }


        String encodedPassword = bCryptPasswordEncoder
                .encode(appUser.getPassword());

        appUser.setPassword(encodedPassword);

        appUserRepository.save(appUser);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                appUser
        );

        confirmationTokenService.saveConfirmationToken(
                confirmationToken);

//        TODO: SEND EMAIL

        return token;
    }

    public GetUserResponse siginUser(String email, String password){

        AppUser appUser = appUserRepository.findByEmail(email)
                .orElseThrow(()->
                        new IllegalStateException(
                                String.format(USER_NOT_FOUND_MSG, email)));



        BCryptPasswordEncoder encode=new BCryptPasswordEncoder();

        String userPassword = appUser.getPassword();
//        System.out.println("table pw:"+this.loadUserByUsername(email).getPassword()+"\npw:"+encodedPassword);
        System.out.println("match"+encode.matches(password, userPassword));
        if(!encode.matches(password, userPassword)){
            throw new IllegalStateException(String.format(USER_NOT_FOUND_MSG, email));

        }

        return new GetUserResponse(
                appUser.getUserID(),true, appUser.getEmail(),
                appUser.getFirstName(), appUser.getLastName());
    }

    public int enableAppUser(String email) {
        return appUserRepository.enableAppUser(email);
    }


    public GetUserResponse updateEmailByuserID(Long userId, String email){

        AppUser appUser = appUserRepository.findUserByuserID(userId)
                .orElseThrow(()->
                        new IllegalStateException(
                                String.format(USER_NOT_FOUND_MSG, userId)));
        appUserRepository.updateEmail(userId, email);
        appUser.setEmail(email);
        String newEmail = appUserRepository.getEmailByuserID(userId);

        return new GetUserResponse(
                appUser.getUserID(),true, newEmail,
                appUser.getFirstName(), appUser.getLastName());
    }



    public void uploadProfileImage(Long userId, MultipartFile file) {
        //1. check image is not empty
        imgService.isFileEmpty(file);
        //2. If file is an image
        imgService.isImage(file);
        //3. The user exists in our database

        AppUser appUser = appUserRepository.findUserByuserID(userId)
                .orElseThrow(()->
                        new IllegalStateException(
                                String.format(USER_NOT_FOUND_MSG, userId)));

        //4. Grab some metadata from file is any
        Map<String, String> metadata = imgService.extractMetadata(file);
        //5. Store the image is s3 and update database(userProfileImageLink) with s3 image link
        String path = String.format("%s/%s", BucketName.PROFILE_IMAGE.getBucketName(), appUser.getUserID());
        String filename = String.format("%s-%s",file.getOriginalFilename(), UUID.randomUUID());
        try {
            fileStore.save(path, filename, Optional.of(metadata), file.getInputStream() );
            appUserRepository.updateUserProfileImageLink(userId, filename);
            appUser.setUserProfileImageLink(filename);
            System.out.println("key1 = "+appUser.getUserProfileImageLink());
        } catch (IOException e) {
            throw new IllegalStateException(e);
        }
    }

    byte[] downloadUserProfileImage(Long userId) {
        AppUser appUser = appUserRepository.findUserByuserID(userId)
                .orElseThrow(()->
                        new IllegalStateException(
                                String.format(USER_NOT_FOUND_MSG, userId)));

        String path = String.format("%s/%s",
                BucketName.PROFILE_IMAGE.getBucketName(),
                appUser.getUserID());

        System.out.println("key2 = "+appUser.getUserProfileImageLink());
        return appUser.getUserProfileImageLink()
                .map(key -> fileStore.download(path, key))
                .orElse(new byte[0]);


    }
}
