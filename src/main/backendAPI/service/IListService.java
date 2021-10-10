package com.spiderman.backendAPI.service;

import com.spiderman.backendAPI.exception.IListNotFoundException;
import com.spiderman.backendAPI.model.IList;
import com.spiderman.backendAPI.repo.IListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IListService {
    private final IListRepo iListRepo;

    @Autowired
    public IListService(IListRepo iListRepo) {
        this.iListRepo = iListRepo;
    }

    public IList addIList(IList iList) {
        return iListRepo.save(iList);
    }

    public List<IList> findAllILists() {
        return iListRepo.findAll();
    }

    public IList updateIList(IList iList) {
        return iListRepo.save(iList);
    }

    public IList findIListById(Long id) {
        return iListRepo.findIListById(id)
                .orElseThrow(() -> new IListNotFoundException("IList by id " + id + " was not found"));
    }

    @Transactional
    public void deleteIList(Long id){
        iListRepo.deleteIListById(id);
    }
}