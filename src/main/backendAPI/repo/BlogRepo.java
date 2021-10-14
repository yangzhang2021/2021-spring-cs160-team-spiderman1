package com.spiderman.backendAPI.repo;

import com.spiderman.backendAPI.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BlogRepo extends JpaRepository<Blog, Long> {
    void deleteBlogById(Long id);

    Optional<Blog> findBlogById(Long id);
}
