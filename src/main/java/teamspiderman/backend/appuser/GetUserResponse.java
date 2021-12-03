package teamspiderman.backend.appuser;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class GetUserResponse {
    private final long userID;
    private final boolean isSignin;
    private final String email;
    private final String firstName;
    private final String lastName;
}
