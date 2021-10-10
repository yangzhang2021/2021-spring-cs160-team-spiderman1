package com.spiderman.backendAPI.repo;

import com.spiderman.backendAPI.model.Img;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImgRepo  extends JpaRepository<Img, Long> {
    void deleteImgById(Long id);

    Optional<Img> findImgById(Long id);
}
