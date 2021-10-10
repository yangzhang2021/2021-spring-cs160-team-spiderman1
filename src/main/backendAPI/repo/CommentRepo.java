package com.spiderman.backendAPI.repo;

import com.spiderman.backendAPI.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepo extends JpaRepository<Comment, Long> {
    void deleteCommentById(Long id);

    Optional<Comment> findCommentById(Long id);
}
