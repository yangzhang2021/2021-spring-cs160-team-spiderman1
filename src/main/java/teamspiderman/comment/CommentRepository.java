package teamspiderman.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface CommentRepository extends JpaRepository<Comment, Long> {
    void deleteCommentById(Long id);

    Optional<Comment> findById(Long id);

    Optional<List<Comment>> findByuserID(Long userId);
    Optional<List<Comment>> findByiBlogID(Long iBlogId);
    Optional<List<Comment>> findByiListID(Long iListId);

}
