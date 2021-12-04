package teamspiderman.backend.IList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface IListRepository extends JpaRepository<IList, Long> {

    void deleteIListById(Long id);
    Optional<IList> getIListById(Long id);
    Optional<List<IList>> getAllIListsByuserID(Long id);


    @Transactional
    @Modifying
    @Query("UPDATE IList i " +
            "SET i.productImageLink = ?3 WHERE i.userID = ?1 AND i.id = ?2")
    int updateProductImageLink(Long userID, Long iListID, String userProfileImageLink);
}
