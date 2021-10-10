package com.spiderman.backendAPI.service;

import com.spiderman.backendAPI.exception.CommentNotFoundException;
import com.spiderman.backendAPI.model.Comment;
import com.spiderman.backendAPI.repo.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CommentService {
    private final CommentRepo commentRepo;

    @Autowired
    public CommentService(CommentRepo commentRepo) {
        this.commentRepo = commentRepo;
    }

    public Comment addComment(Comment comment) {
        return commentRepo.save(comment);
    }

    public List<Comment> findAllComments() {
        return commentRepo.findAll();
    }

    public Comment updateComment(Comment comment) {
        return commentRepo.save(comment);
    }

    public Comment findCommentById(Long id) {
        return commentRepo.findCommentById(id)
                .orElseThrow(() -> new CommentNotFoundException("Comment by id " + id + " was not found"));
    }

    @Transactional
    public void deleteComment(Long id){
        commentRepo.deleteCommentById(id);
    }
}