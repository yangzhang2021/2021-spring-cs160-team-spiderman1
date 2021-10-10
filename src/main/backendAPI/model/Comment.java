package com.spiderman.backendAPI.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
public class Comment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Date time;
    private String content;

    public Comment() {
    }

    public Comment(Long id, Date time, String content) {
        this.id = id;
        this.time = time;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Img{" +
                "id=" + id +
                ", time=" + time +
                ", content='" + content + '\'' +
                '}';
    }
}
