package teamspiderman.backend.Img;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface ImgRepository extends JpaRepository<Img, Long> {
    void deleteImgById(Long id);

    Optional<Img> findById(Long id);

    Optional<List<Img>> findByuserID(Long userId);
    Optional<List<Img>> findByiBlogID(Long iBlogId);
    Optional<List<Img>> findByiListID(Long iListId);
}
