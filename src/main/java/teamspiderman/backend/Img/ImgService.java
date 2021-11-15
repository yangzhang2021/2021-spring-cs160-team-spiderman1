package teamspiderman.backend.Img;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ImgService {
    private final ImgRepository imgRepo;

    @Autowired
    public ImgService(ImgRepository imgRepo) {
        this.imgRepo = imgRepo;
    }

    public Img addImg(Img img) {
        return imgRepo.save(img);
    }

    //not using
    public List<Img> findAllImgs() {
        return imgRepo.findAll();
    }

    public Img updateImg(Img img) {
        return imgRepo.save(img);
    }

    public List<Img> findByuserID(Long userId) {
        return imgRepo
                .findByuserID(userId)
                .orElseThrow(()->new ImgNotFoundException("Img for user = "+userId+"were not found"));
    }

    public List<Img> findByiBlogID(Long iBlogId) {
        return imgRepo
                .findByiBlogID(iBlogId)
                .orElseThrow(()->new ImgNotFoundException("Img for iBlog = "+iBlogId+"were not found"));
    }

    public List<Img> findByiListID(Long iListId) {
        return imgRepo
                .findByiListID(iListId)
                .orElseThrow(()->new ImgNotFoundException("Img for iList = "+iListId+"were not found"));
    }

    public Img findById(Long id) {
        return imgRepo.findById(id)
                .orElseThrow(() -> new ImgNotFoundException("Img by id " + id + " was not found"));
    }

    @Transactional
    public void deleteImg(Long id){
        imgRepo.deleteImgById(id);
    }
}