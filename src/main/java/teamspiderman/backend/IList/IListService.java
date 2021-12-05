package teamspiderman.backend.IList;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import teamspiderman.backend.Img.ImgService;
import teamspiderman.backend.appuser.AppUser;
import teamspiderman.backend.appuser.AppUserRepository;
import teamspiderman.backend.bucket.BucketName;
import teamspiderman.backend.bucket.ProductImageBucketName;
import teamspiderman.backend.filestore.FileStore;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class IListService {
    private final IListRepository iListRepo;
    private final FileStore fileStore;
    private final ImgService imgService;
    private final AppUserRepository appUserRepository;

    private final static String USER_NOT_FOUND_MSG =
            "email %s or password is incorrect";

    private final static String ILIST_NOT_FOUND_MSG =
            "iList %s cannot be found";

    public IList addIList(IList iList) {
        return iListRepo.save(iList);
    }

    public List<IList> findAll(){
        if(iListRepo.count()>=1){
            System.out.println("here1");
            return iListRepo.findAll();
        }else{
            System.out.println("here2");
            throw new IllegalStateException("no iList found");
        }

    }

    public List<IList> getAllIListsByuserID(Long id) {
        return iListRepo
                .getAllIListsByuserID(id)
                .orElseThrow(()->new IListNotFoundException("ILists for user"+id+"were not found"));
    }

    public IList updateIList(IList iList) {
        return iListRepo.save(iList);
    }

    public IList getIListById(Long id) {
        return iListRepo.getIListById(id)
                .orElseThrow(() -> new IListNotFoundException("IList by id " + id + " was not found"));
    }

    @Transactional
    public void deleteIList(Long id){
        iListRepo.deleteIListById(id);
    }

    public void uploadProductImage(Long userId, Long iListId, MultipartFile file) {
        //1. check image is not empty
        imgService.isFileEmpty(file);
        //2. If file is an image
        imgService.isImage(file);
        //3. The user exists in our database

        AppUser appUser = appUserRepository.findUserByuserID(userId)
                .orElseThrow(()->
                        new IllegalStateException(
                                String.format(USER_NOT_FOUND_MSG, userId)));

        IList iList = iListRepo.getIListById(iListId).orElseThrow(()->
                new IllegalStateException(
                        String.format(ILIST_NOT_FOUND_MSG, iListId)));

        //4. Grab some metadata from file is any
        Map<String, String> metadata = imgService.extractMetadata(file);
        //5. Store the image is s3 and update database(userProfileImageLink) with s3 image link
        String path = String.format("%s/%s/%s",
                ProductImageBucketName.PRODUCT_IMAGE.getProductImageBucketName(),
                appUser.getUserID(),
                iList.getId());
        String filename = String.format("%s-%s",file.getOriginalFilename(), UUID.randomUUID());
        try {
            fileStore.save(path, filename, Optional.of(metadata), file.getInputStream() );
            iListRepo.updateProductImageLink(userId,iListId, filename);
            iList.setProductImageLink(filename);
            System.out.println("key1 = "+iList.getProductImageLink());
        } catch (IOException e) {
            throw new IllegalStateException(e);
        }
    }

    byte[] downloadUserProfileImage(Long userId, Long iListId) {
        AppUser appUser = appUserRepository.findUserByuserID(userId)
                .orElseThrow(()->
                        new IllegalStateException(
                                String.format(USER_NOT_FOUND_MSG, userId)));

        IList iList = iListRepo.getIListById(iListId).orElseThrow(()->
                new IllegalStateException(
                        String.format(ILIST_NOT_FOUND_MSG, iListId)));

        String path = String.format("%s/%s/%s",
                ProductImageBucketName.PRODUCT_IMAGE.getProductImageBucketName(),
                appUser.getUserID(),
                iList.getId());

        System.out.println("key2 = "+iList.getProductImageLink());
        return iList.getProductImageLink()
                .map(key -> fileStore.download(path, key))
                .orElse(new byte[0]);
    }
}