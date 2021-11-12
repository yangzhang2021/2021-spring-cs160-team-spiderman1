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
    private Long imgID;
    private Date time;
    private String title;
    private String content;
    private String category;
    private Long likes;
    private Long userID;



    public IBlog(Long imgID, Date time, String title,
                 String content,String category,
                 Long likes, Long userID ) {

        this.imgID = imgID;
        this.time = time;
        this.title = title;
        this.content = content;
        this.category = category;
        this.likes = likes;
        this.userID = userID;
    }


    @Override
    public String toString() {
        return "IBlog{" +
                "id=" + this.id +
                ", imgID=" + this.imgID +
                ", time=" + this.time +
                ", title='" + this.title + '\'' +
                ", content='" + this.content + '\'' +
                ", category='" + this.category + '\'' +
                ", likes=" + this.likes +
                ", userID=" + this.userID +
                '}';
    }
}

