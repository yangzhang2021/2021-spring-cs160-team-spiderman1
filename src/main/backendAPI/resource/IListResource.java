package com.spiderman.backendAPI.resource;

import com.spiderman.backendAPI.model.IList;
import com.spiderman.backendAPI.service.IListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ilist")
public class IListResource {
    private final IListService IListService;

    public IListResource(IListService IListService) {
        this.IListService = IListService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<IList>> getAllILists () {
        List<IList> ILists = IListService.findAllILists();
        return new ResponseEntity<>(ILists, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<IList> getIListById (@PathVariable("id") Long id) {
        IList IList = IListService.findIListById(id);
        return new ResponseEntity<>(IList, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<IList> addIList(@RequestBody IList IList) {
        IList newIList = IListService.addIList(IList);
        return new ResponseEntity<>(newIList, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<IList> updateIList(@RequestBody IList IList) {
        IList updateIList = IListService.updateIList(IList);
        return new ResponseEntity<>(updateIList, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteIList(@PathVariable("id") Long id) {
        IListService.deleteIList(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
