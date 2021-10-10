package com.spiderman.backendAPI.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Blog implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private Long imgId;
    private String information;
    private Long iblogId;
    private Long ilistId;

    public Blog() {
    }

    public Blog(Long id, String name, Long imgId, String information, Long iblogId, Long ilistId) {
        this.id = id;
        this.name = name;
        this.imgId = imgId;
        this.information = information;
        this.iblogId = iblogId;
        this.ilistId = ilistId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getImgId() {
        return imgId;
    }

    public void setImg(Long imgId) {
        this.imgId = imgId;
    }

    public String getInformation() {
        return information;
    }

    public void setInformation(String information) {
        this.information = information;
    }

    public Long getIblogId() {
        return iblogId;
    }

    public void setIblogId(Long iblogId) {
        this.iblogId = iblogId;
    }

    public Long getIlistId() {
        return ilistId;
    }

    public void setIlistId(Long ilistId) {
        this.ilistId = ilistId;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "name='" + name + '\'' +
                ", imgId=" + imgId +
                ", information='" + information + '\'' +
                ", iblogId=" + iblogId +
                ", ilistId=" + ilistId +
                '}';
    }
}
