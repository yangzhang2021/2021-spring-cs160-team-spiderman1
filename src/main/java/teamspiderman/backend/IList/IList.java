package teamspiderman.backend.IList;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class IList implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long imgID;
    private Date time;
    private String title;
    private String content;
    private Float price;
    private Long userID;

    public IList(Long imgID, Date time,
                 String title, String content,
                 Float price, Long userID) {

        this.imgID = imgID;
        this.time = time;
        this.title = title;
        this.content = content;
        this.price = price;
        this.userID = userID;
    }

    @Override
    public String toString() {
        return "IList{" +
                "id=" + id +
                ", imgID=" + imgID +
                ", time=" + time +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", price='" + price + '\'' +
                ", userID=" + userID +
                '}';
    }
}
