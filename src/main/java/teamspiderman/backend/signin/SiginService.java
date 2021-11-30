package teamspiderman.backend.signin;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import teamspiderman.backend.appuser.AppUserService;
import teamspiderman.backend.registration.EmailValidator;
import teamspiderman.backend.registration.Token.ConfirmationToken;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class SiginService {
    private final AppUserService appUserService;
    private final EmailValidator emailValidator;

    public SigninResponse signin(SiginRequest request){
        boolean isValidEmail = emailValidator.
                test(request.getEmail());

        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }
        return appUserService.siginUser(request.getEmail(),request.getPassword());
    }
}
