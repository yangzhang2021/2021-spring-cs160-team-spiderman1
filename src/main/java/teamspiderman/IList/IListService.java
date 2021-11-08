package teamspiderman.IList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IListService {
    private final IListRepository iListRepo;

    @Autowired
    public IListService(IListRepository iListRepo) {
        this.iListRepo = iListRepo;
    }

    public IList addIList(IList iList) {
        return iListRepo.save(iList);
    }

    public List<IList> getAllIListsById(Long id) {
        return iListRepo
                .getAllIListsById(id)
                .orElseThrow(()->new IListNotFoundException("ILists for user"+id+"were not found"));
    }

    public IList updateIList(IList iList) {
        return iListRepo.save(iList);
    }

    public IList getIListById(Long id) {
        return iListRepo.getIListById(id)
                .orElseThrow(() -> new IListNotFoundException("IList by id " + id + " was not found"));
    }

    @Transactional
    public void deleteIList(Long id){
        iListRepo.deleteIListById(id);
    }
}