package teamspiderman.IBlog;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;


@Setter
@Getter
@NoArgsConstructor
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
    private String category;
    private Long likes;
    private Long userID;



    public IBlog(Long imgId, Date time, String title,
                 String content, String comment, String category,
                 Long likes, Long userID ) {

        this.imgId = imgId;
        this.time = time;
        this.title = title;
        this.content = content;
        this.comment = comment;
        this.category = category;
        this.likes = likes;
        this.userID = userID;
    }


    @Override
    public String toString() {
        return "IBlog{" +
                "id=" + this.id +
                ", imgId=" + this.imgId +
                ", time=" + this.time +
                ", title='" + this.title + '\'' +
                ", content='" + this.content + '\'' +
                ", comment='" + this.comment + '\'' +
                ", category='" + this.category + '\'' +
                ", likes=" + this.likes +
                ", userID=" + this.userID +
                '}';
    }
}

