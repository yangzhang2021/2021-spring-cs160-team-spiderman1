package teamspiderman.backend.comment;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import teamspiderman.backend.appuser.AppUserRepository;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1")
@AllArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final AppUserRepository appUserRepository;

    @PostMapping("/addComment")
    public ResponseEntity<Comment> addComment(
            @RequestBody Comment comment){

        Long user_id = comment.getUserID();

        boolean userExists = appUserRepository
                .findUserByuserID(user_id)
                .isPresent();

        if(!userExists){
            throw new IllegalStateException("user doesn't exist");
        }
        if(comment.getContent().isEmpty()){
            throw new IllegalStateException("content cannot be empty");
        }

        Comment newComment = commentService.addComment(comment);
        return new ResponseEntity<>(newComment, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}/comments")
    public ResponseEntity<List<Comment>> findByuserID(
            @PathVariable("userId") Long userId){
        List<Comment> comments= commentService.findByuserID(userId);
        return new ResponseEntity<>(comments, HttpStatus.CREATED);
    }

    //@GetMapping("/iBlog/comments/{iBlogId}")
    @RequestMapping(path="/iBlog/{iBlogId}", method = RequestMethod.GET, params="comments")
    public ResponseEntity<List<Comment>> findByiBlogID(
            @PathVariable("iBlogId") Long iBlogId){
        List<Comment> comments= commentService.findByiBlogID(iBlogId);
        return new ResponseEntity<>(comments, HttpStatus.CREATED);
    }

    @RequestMapping(path="/iList/{iListId}", method = RequestMethod.GET, params="comments")
    public ResponseEntity<List<Comment>> findByiListID(
            @PathVariable("iListId") Long iListId){
        List<Comment> comments= commentService.findByiListID(iListId);
        return new ResponseEntity<>(comments, HttpStatus.CREATED);
    }




}
