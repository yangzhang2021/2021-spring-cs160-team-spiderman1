package com.spiderman.backendAPI.resource;

import com.spiderman.backendAPI.model.Blog;
import com.spiderman.backendAPI.service.BlogService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogResource {
    private final BlogService blogService;

    public BlogResource(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Blog>> getAllBlogs () {
        List<Blog> blogs = blogService.findAllBlogs();
        return new ResponseEntity<>(blogs, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Blog> getBlogById (@PathVariable("id") Long id) {
        Blog blog = blogService.findBlogById(id);
        return new ResponseEntity<>(blog, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Blog> addBlog(@RequestBody Blog blog) {
        Blog newBlog = blogService.addBlog(blog);
        return new ResponseEntity<>(newBlog, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Blog> updateBlog(@RequestBody Blog blog) {
        Blog updateBlog = blogService.updateBlog(blog);
        return new ResponseEntity<>(updateBlog, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBlog(@PathVariable("id") Long id) {
        blogService.deleteBlog(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}