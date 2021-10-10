package com.spiderman.backendAPI.resource;

import com.spiderman.backendAPI.model.IBlog;
import com.spiderman.backendAPI.service.IBlogService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/IBlog")
public class IBlogResource {
    private final IBlogService iBlogService;

    public IBlogResource(IBlogService iBlogService) {
        this.iBlogService = iBlogService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<IBlog>> getAllIBlogs () {
        List<IBlog> iBlogs = iBlogService.findAllIBlogs();
        return new ResponseEntity<>(iBlogs, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<IBlog> getIBlogById (@PathVariable("id") Long id) {
        IBlog iBlog = iBlogService.findIBlogById(id);
        return new ResponseEntity<>(iBlog, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<IBlog> addIBlog(@RequestBody IBlog iBlog) {
        IBlog newIBlog = iBlogService.addIBlog(iBlog);
        return new ResponseEntity<>(newIBlog, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<IBlog> updateIBlog(@RequestBody IBlog iBlog) {
        IBlog updateIBlog = iBlogService.updateIBlog(iBlog);
        return new ResponseEntity<>(updateIBlog, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteIBlog(@PathVariable("id") Long id) {
        iBlogService.deleteIBlog(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
