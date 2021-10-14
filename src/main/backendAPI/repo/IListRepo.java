package com.spiderman.backendAPI.repo;

import com.spiderman.backendAPI.model.IList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IListRepo extends JpaRepository<IList, Long> {
    void deleteIListById(Long id);

    Optional<IList> findIListById(Long id);
}
