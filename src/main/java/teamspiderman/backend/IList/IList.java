package teamspiderman.backend.IList;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Optional;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class IList implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Date time;
    private String title;
    private String productImageLink;
    private String content;
    private Float price;
    private Long userID;

    public IList(Date time,
                 String title, String productImageLink,String content,
                 Float price, Long userID) {

        this.time = time;
        this.title = title;
        this.productImageLink = productImageLink;
        this.content = content;
        this.price = price;
        this.userID = userID;
    }

    @Override
    public String toString() {
        return "IList{" +
                "id=" + id +
                ", time=" + time +
                ", title='" + title + '\'' +
                ", productImageLink='" + productImageLink + '\'' +
                ", content='" + content + '\'' +
                ", price='" + price + '\'' +
                ", userID=" + userID +
                '}';
    }


    public Optional<String> getProductImageLink() {
        return Optional.ofNullable(productImageLink);
    }
}
