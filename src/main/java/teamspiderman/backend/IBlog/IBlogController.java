package teamspiderman.backend.IBlog;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import teamspiderman.backend.appuser.AppUserRepository;

import java.util.List;


@RestController
@RequestMapping(path = "api/v1/iBlog")
@AllArgsConstructor
public class IBlogController {

    private final IBlogService iBlogService;
    private final AppUserRepository appUserRepository;


    @PostMapping(path ="/addIblog")
    public ResponseEntity<IBlog> addIBlog(
            @RequestBody IBlog iBlog){

        Long user_id = iBlog.getUserID();

        boolean userExists = appUserRepository
                .findUserByuserID(user_id)
                .isPresent();

        if(!userExists){
            throw new IllegalStateException("user doesn't exist");
        }
        if(iBlog.getContent().isEmpty()
                || iBlog.getTitle().isEmpty()
                || iBlog.getCategory().isEmpty()){
            throw new IllegalStateException("content, title or category cannot be empty");
        }

        IBlog newIBlog = iBlogService.addIBlog(iBlog);
        return new ResponseEntity<>(newIBlog, HttpStatus.CREATED);
    }

    @GetMapping(path ="/{userId}/iBlogs")
    public ResponseEntity< List<IBlog>> getAllIBlogsByuserID (@PathVariable("userId") Long userId) {
        List<IBlog> iBlogs = iBlogService.getAllIBlogsByuserID(userId);
        return new ResponseEntity<>(iBlogs, HttpStatus.OK);
    }


    @RequestMapping(path ="/{iBlogId}", method = RequestMethod.GET, params="content")
    public ResponseEntity<IBlog> getIBlogById (@PathVariable("iBlogId") Long iBlogId){
        IBlog iBlog = iBlogService.getIBlogById(iBlogId);
        return new ResponseEntity<>(iBlog, HttpStatus.OK);
    }

}
