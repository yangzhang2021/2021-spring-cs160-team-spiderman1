package teamspiderman.backend.appuser;


import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/edit_user")
@AllArgsConstructor
public class AppUserController {
    private final AppUserService appUserService;
    private final AppUserRepository appUserRepository;


    @PutMapping("/edit_email/{userId}/")
    public GetUserResponse updateEmailByuserID(
            @PathVariable("userId") Long userId,
            @RequestParam(value="email") String email){
        boolean userExists = appUserRepository
                .findUserByuserID(userId)
                .isPresent();

        boolean sameEmailExists = appUserRepository
                .findByEmail(email)
                .isPresent();
        
        System.out.println("userID = "+userId);
        if(!userExists || sameEmailExists){
            throw new IllegalStateException("something wrong!!!");
        }
        return appUserService.updateEmailByuserID(userId, email);
    }

    @PostMapping(
            path = "{userId}/profileImgFile/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadUserProfileImage(@PathVariable("userId") Long userId,
                                       @RequestParam("profileImgFile") MultipartFile profileImgFile){
        appUserService.uploadProfileImage(userId, profileImgFile);
    }

    @GetMapping("{userId}/profileimage/download")
    public byte[] downloadUserProfileImage(@PathVariable("userId") Long userId){
        return appUserService.downloadUserProfileImage(userId);
    }

}
