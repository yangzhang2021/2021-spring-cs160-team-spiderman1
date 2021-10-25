package com.spiderman.backendAPI.service;

import com.spiderman.backendAPI.exception.IBlogNotFoundException;
import com.spiderman.backendAPI.exception.IListNotFoundException;
import com.spiderman.backendAPI.exception.UserNotFoundException;
import com.spiderman.backendAPI.model.IBlog;
import com.spiderman.backendAPI.model.IList;
import com.spiderman.backendAPI.model.User;
import com.spiderman.backendAPI.repo.IBlogRepo;
import com.spiderman.backendAPI.repo.IListRepo;
import com.spiderman.backendAPI.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonalPageService {

    private final UserRepo userRepo;
    private final IBlogRepo iBlogRepo;
    private final IListRepo iListRepo;

    @Autowired
    public PersonalPageService(UserRepo userRepo, IBlogRepo iBlogRepo, IListRepo iListRepo) {
        this.userRepo = userRepo;
        this.iBlogRepo = iBlogRepo;
        this.iListRepo = iListRepo;
    }

    public User findUserById(Long id){
        return userRepo.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public IBlog findBlogById(Long id) {
        return iBlogRepo.findIBlogById(id)
                .orElseThrow(() -> new IBlogNotFoundException("iBlog by id " + id + " was not found"));
    }

    public IList findIListById(Long id) {
        return iListRepo.findIListById(id)
                .orElseThrow(() -> new IListNotFoundException("iList by id " + id + " was not found"));
    }

}
