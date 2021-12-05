package teamspiderman.backend.Img;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1")
@AllArgsConstructor
public class ImgController {
    private final ImgService imgService;

    @PostMapping("/addImg")
    public ResponseEntity<Img> addImg(
            @RequestBody Img img){
        Img newImg = imgService.addImg(img);
        return new ResponseEntity<>(newImg, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}/imgs")
    public ResponseEntity<List<Img>> findByuserID(
            @PathVariable("userId") Long userId){
        List<Img> imgs= imgService.findByuserID(userId);
        return new ResponseEntity<>(imgs, HttpStatus.OK);
    }


    @RequestMapping(path="/iBlog/{iBlogId}", method = RequestMethod.GET, params="imgs")
    public ResponseEntity<List<Img>> findByiBlogID(
            @PathVariable("iBlogId") Long iBlogId){
        List<Img> imgs= imgService.findByiBlogID(iBlogId);
        return new ResponseEntity<>(imgs, HttpStatus.OK);
    }

    @RequestMapping(path="/iList/{iListId}", method = RequestMethod.GET, params="imgs")
    public ResponseEntity<List<Img>> findByiListID(
            @PathVariable("iListId") Long iListId){
        List<Img> imgs= imgService.findByiListID(iListId);
        return new ResponseEntity<>(imgs, HttpStatus.OK);
    }




}
