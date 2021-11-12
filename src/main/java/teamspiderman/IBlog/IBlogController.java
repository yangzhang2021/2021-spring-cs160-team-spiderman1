package teamspiderman.IBlog;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import teamspiderman.comment.Comment;
import teamspiderman.comment.CommentService;

import java.util.List;


@RestController
@RequestMapping(path = "api/v1/iBlog")
@AllArgsConstructor
public class IBlogController {

    private final IBlogService iBlogService;


    @PostMapping(path ="/addIblog")
    public ResponseEntity<IBlog> addIBlog(
            @RequestBody IBlog iBlog){
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
