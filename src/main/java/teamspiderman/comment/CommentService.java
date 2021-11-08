package teamspiderman.comment;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentService {
    private final CommentRepository commentRepo;

    public Comment addComment(Comment comment) {
        return commentRepo.save(comment);
    }

    public List<Comment> findAllComments() {
        return commentRepo.findAll();
    }

    public Comment updateComment(Comment comment) {
        return commentRepo.save(comment);
    }

    public List<Comment> findByuserID(Long userId) {
        return commentRepo
                .findByuserID(userId)
                .orElseThrow(()->new CommentNotFoundException("Comments for user = "+userId+"were not found"));
    }

    public List<Comment> findByiBlogID(Long iBlogId) {
        return commentRepo
                .findByiBlogID(iBlogId)
                .orElseThrow(()->new CommentNotFoundException("Comments for iBlog = "+iBlogId+"were not found"));
    }

    public List<Comment> findByiListID(Long iListId) {
        return commentRepo
                .findByiListID(iListId)
                .orElseThrow(()->new CommentNotFoundException("Comments for iList = "+iListId+"were not found"));
    }



    public Comment findById(Long id) {
        return commentRepo.findById(id)
                .orElseThrow(() -> new CommentNotFoundException("Comment by id = " + id + " was not found"));
    }

    @Transactional
    public void deleteComment(Long id){
        commentRepo.deleteCommentById(id);
    }
}
