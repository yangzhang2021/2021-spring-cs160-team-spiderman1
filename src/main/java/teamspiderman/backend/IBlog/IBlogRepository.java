package teamspiderman.backend.IBlog;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface IBlogRepository extends JpaRepository<IBlog, Long> {
    void deleteIBlogById(Long id);
    Optional<IBlog> getIBlogById(Long id);
    Optional<List<IBlog>> getAllIBlogsByuserID(Long userId);
}