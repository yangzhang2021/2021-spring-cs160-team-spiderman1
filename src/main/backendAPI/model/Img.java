package com.spiderman.backendAPI.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Img implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long userID;
    private String path;

    public Img() {
    }

    public Img(Long id, Long userID, String path) {
        this.id = id;
        this.userID = userID;
        this.path = path;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @Override
    public String toString() {
        return "Img{" +
                "id=" + id +
                ", userID=" + userID +
                ", path='" + path + '\'' +
                '}';
    }
}
