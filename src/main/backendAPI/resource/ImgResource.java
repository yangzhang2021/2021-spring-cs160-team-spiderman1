package com.spiderman.backendAPI.resource;

import com.spiderman.backendAPI.model.Img;
import com.spiderman.backendAPI.service.ImgService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/img")
public class ImgResource {
    private final ImgService imgService;

    public ImgResource(ImgService imgService) {
        this.imgService = imgService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Img>> getAllImgs () {
        List<Img> imgs = imgService.findAllImgs();
        return new ResponseEntity<>(imgs, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Img> getImgById (@PathVariable("id") Long id) {
        Img img = imgService.findImgById(id);
        return new ResponseEntity<>(img, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Img> addImg(@RequestBody Img img) {
        Img newImg = imgService.addImg(img);
        return new ResponseEntity<>(newImg, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Img> updateImg(@RequestBody Img img) {
        Img updateImg = imgService.updateImg(img);
        return new ResponseEntity<>(updateImg, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteImg(@PathVariable("id") Long id) {
        imgService.deleteImg(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
