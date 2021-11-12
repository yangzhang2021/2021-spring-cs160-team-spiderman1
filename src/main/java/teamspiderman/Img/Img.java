package teamspiderman.Img;

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
    private String path;
    private Long iBlogID;
    private Long iListID;
    private Long userID;

    public Img(String path, Long iBlogID,
               Long iListID, Long userID) {
        this.path = path;
        this.iBlogID = iBlogID;
        this.iListID = iListID;
        this.userID = userID;
    }


    @Override
    public String toString() {
        return "Img{" +
                "id=" + this.id +
                ", path='" + path + '\'' +
                ", iBlogIDD=" + this.iBlogID +
                ", userID=" + this.userID +
                '}';
    }
}
