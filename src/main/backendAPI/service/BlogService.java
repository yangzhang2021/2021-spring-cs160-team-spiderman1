package com.spiderman.backendAPI.service;

import com.spiderman.backendAPI.exception.BlogNotFoundException;
import com.spiderman.backendAPI.model.Blog;
import com.spiderman.backendAPI.repo.BlogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BlogService {
    private final BlogRepo blogRepo;

    @Autowired
    public BlogService(BlogRepo blogRepo) {
        this.blogRepo = blogRepo;
    }

    public Blog addBlog(Blog blog) {
        return blogRepo.save(blog);
    }

    public List<Blog> findAllBlogs() {
        return blogRepo.findAll();
    }

    public Blog updateBlog(Blog blog) {
        return blogRepo.save(blog);
    }

    public Blog findBlogById(Long id) {
        return blogRepo.findBlogById(id)
                .orElseThrow(() -> new BlogNotFoundException("Blog by id " + id + " was not found"));
    }

    @Transactional
    public void deleteBlog(Long id){
        blogRepo.deleteBlogById(id);
    }
}
