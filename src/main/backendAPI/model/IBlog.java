package com.spiderman.backendAPI.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
public class IBlog implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long imgId;
    private Date time;
    private String title;
    private String content;
    private String comment;
    private Long userID;
    private Long likes;

    public IBlog() {
    }

    public IBlog(Long id, Long imgId, Date time, String title, String content, String comment, Long userID, Long likes) {
        this.id = id;
        this.imgId = imgId;
        this.time = time;
        this.title = title;
        this.content = content;
        this.comment = comment;
        this.userID = userID;
        this.likes = likes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getImgId() {
        return imgId;
    }

    public void setImgId(Long imgId) {
        this.imgId = imgId;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getLikes() {
        return likes;
    }

    public void setLikes(Long likes) {
        this.likes = likes;
    }

    @Override
    public String toString() {
        return "IBlog{" +
                "id=" + id +
                ", imgId=" + imgId +
                ", time=" + time +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", comment='" + comment + '\'' +
                ", userID=" + userID +
                ", likes=" + likes +
                '}';
    }
}
