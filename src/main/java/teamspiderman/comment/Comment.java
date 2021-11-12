package teamspiderman.comment;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import teamspiderman.appuser.AppUser;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;



@Setter
@Getter
@NoArgsConstructor
@Entity

public class Comment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Date time;
    private String content;
    private Long iBlogID;
    private Long iListID;

    private Long userID;

//    @ManyToOne
//    @JoinTable(
//            name = "AppUser",
//            joinColumns = @JoinColumn(
//                    name = "userID",
//                    referencedColumnName = "usereID"
//            )
//    )
//    private AppUser appUser;


    public Comment(Date time, String content,
                   Long iBlogID, Long iListID,
                   Long userID) {
        this.time = time;
        this.content = content;
        this.iBlogID = iBlogID;
        this.iListID = iListID;
        this.userID = userID;
    }

    @Override
    public String toString() {
        return "Img{" +
                "id=" + this.id +
                ", time=" + this.time +
                ", content='" + this.content + '\'' +
                ", iBlogID='" + this.iBlogID + '\'' +
                ", iListID='" + this.iListID + '\'' +
                ", userID='" + this.userID + '\'' +
                '}';
    }
}
