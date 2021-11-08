package teamspiderman.Img;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface ImgRepository extends JpaRepository<Img, Long> {
    void deleteImgById(Long id);

    Optional<Img> findImgById(Long id);
}
