package com.spiderman.backendAPI.repo;

import com.spiderman.backendAPI.model.IBlog;
import com.spiderman.backendAPI.model.IList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IBlogRepo extends JpaRepository<IBlog, Long> {
    void deleteIBlogById(Long id);

    Optional<IBlog> findIBlogById(Long id);
    Optional<List<IList>> findAllIlistById(Long userId);
}
