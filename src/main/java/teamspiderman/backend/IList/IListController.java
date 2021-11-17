package teamspiderman.backend.IList;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import teamspiderman.backend.appuser.AppUserRepository;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/iList")
@AllArgsConstructor
public class IListController {
    private final IListService iListService;
    private final AppUserRepository appUserRepository;

    @PostMapping("/addIList")
    public ResponseEntity<IList> addIList(
            @RequestBody IList iList){

        Long user_id = iList.getUserID();

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

}
