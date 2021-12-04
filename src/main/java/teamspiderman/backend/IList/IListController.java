package teamspiderman.backend.IList;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import teamspiderman.backend.appuser.AppUserRepository;
import teamspiderman.backend.appuser.GetUserResponse;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/iList")
@AllArgsConstructor
public class IListController {
    private final IListService iListService;
    private final AppUserRepository appUserRepository;

    @PostMapping("/{userId}/addIList")
    public ResponseEntity<IList> addIList(
            @RequestBody IList iList){

        Long user_id = iList.getUserID();
        java.sql.Date sqlDate=new java.sql.Date(new java.util.Date().getTime());
        iList.setTime(sqlDate);

        boolean userExists = appUserRepository
                .findUserByuserID(user_id)
                .isPresent();

        if(!userExists){
            throw new IllegalStateException("user doesn't exist");
        }

        if(iList.getContent().isEmpty()
                || iList.getTitle().isEmpty()){
            throw new IllegalStateException("content or title cannot be empty");
        }
        IList newIList = iListService.addIList(iList);
        return new ResponseEntity<>(newIList, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}/iLists")
    public ResponseEntity<List<IList>> getAllIListsByuserID (@PathVariable("userId") Long userId) {
        List<IList> iLists = iListService.getAllIListsByuserID(userId);
        return new ResponseEntity<>(iLists, HttpStatus.OK);
    }

    @GetMapping("/{iListId}")
    public ResponseEntity<IList> getIListById (@PathVariable("iListId") Long iListId){
        IList iList = iListService.getIListById(iListId);
        return new ResponseEntity<>(iList, HttpStatus.OK);
    }


    @PostMapping(
            path = "{userId}/{iListId}/productImageFile/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadUserProfileImage(@PathVariable("userId") Long userId,
                                       @PathVariable("iListId") Long iListId,
                                       @RequestParam("productImageFile") MultipartFile productImageFile){
        iListService.uploadProductImage(userId, iListId, productImageFile);
    }

    @GetMapping("{userId}/{iListId}/productImageFile/download")
    public byte[] downloadUserProfileImage(
            @PathVariable("userId") Long userId,
            @PathVariable("iListId") Long iListId){
        return iListService.downloadUserProfileImage(userId, iListId);
    }

}
