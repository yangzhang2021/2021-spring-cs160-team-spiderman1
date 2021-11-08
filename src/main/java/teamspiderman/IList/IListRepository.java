package teamspiderman.IList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface IListRepository extends JpaRepository<IList, Long> {

    void deleteIListById(Long id);
    Optional<IList> getIListById(Long id);
    Optional<List<IList>> getAllIListsById(Long id);
}
