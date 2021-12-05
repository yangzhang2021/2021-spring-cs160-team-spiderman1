package teamspiderman.backend.Img;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.apache.http.entity.ContentType.*;

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

    public void isImage(MultipartFile file) {
        if(!Arrays.asList(IMAGE_JPEG.getMimeType(),
                IMAGE_PNG.getMimeType(),
                IMAGE_GIF.getMimeType()).contains(file.getContentType())){
            throw new IllegalStateException("File muse be an image [" + file.getContentType() + "]");
        }
    }

    public void isFileEmpty(MultipartFile file) {
        if(file.isEmpty()){
            throw new IllegalStateException("can not upload empty file[" + file.getSize() + "]");
        }
    }

    public Map<String, String> extractMetadata(MultipartFile file) {
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));
        return metadata;
    }
}