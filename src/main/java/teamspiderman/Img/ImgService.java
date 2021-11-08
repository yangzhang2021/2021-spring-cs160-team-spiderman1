package teamspiderman.Img;

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

    public List<Img> findAllImgs() {
        return imgRepo.findAll();
    }

    public Img updateImg(Img img) {
        return imgRepo.save(img);
    }

    public Img findImgById(Long id) {
        return imgRepo.findImgById(id)
                .orElseThrow(() -> new ImgNotFoundException("Img by id " + id + " was not found"));
    }

    @Transactional
    public void deleteImg(Long id){
        imgRepo.deleteImgById(id);
    }
}