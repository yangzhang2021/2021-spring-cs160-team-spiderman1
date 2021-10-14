package com.spiderman.backendAPI.service;

import com.spiderman.backendAPI.exception.IBlogNotFoundException;
import com.spiderman.backendAPI.model.IBlog;
import com.spiderman.backendAPI.repo.IBlogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IBlogService {
    private final IBlogRepo iBlogRepo;

    @Autowired
    public IBlogService(IBlogRepo iIBlogRepo) {
        this.iBlogRepo = iIBlogRepo;
    }

    public IBlog addIBlog(IBlog iIBlog) {
        return iBlogRepo.save(iIBlog);
    }

    public List<IBlog> findAllIBlogs() {
        return iBlogRepo.findAll();
    }

    public IBlog updateIBlog(IBlog iIBlog) {
        return iBlogRepo.save(iIBlog);
    }

    public IBlog findIBlogById(Long id) {
        return iBlogRepo.findIBlogById(id)
                .orElseThrow(() -> new IBlogNotFoundException("IBlog by id " + id + " was not found"));
    }

    @Transactional
    public void deleteIBlog(Long id){
        iBlogRepo.deleteIBlogById(id);
    }
}