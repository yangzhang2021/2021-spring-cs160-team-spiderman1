package teamspiderman.backend.Img;

import java.sql.Date;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Img implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String path;
    private Date time;
    private Long iBlogID;
    private Long iListID;
    private Long userID;

    public Img(String name, String path,
               Date time, Long iBlogID,
               Long iListID, Long userID) {
        this.name = name;
        this.path = path;
        this.time = time;
        this.iBlogID = iBlogID;
        this.iListID = iListID;
        this.userID = userID;
    }


    @Override
    public String toString() {
        return "Img{" +
                "id=" + this.id +
                "name=" + this.name +
                ", path='" + path +
                ", time=" + this.time +
                ", iBlogID=" + this.iBlogID +
                ", iListID =" + this.iListID+
                ", userID=" + this.userID +
                '}';
    }
}
