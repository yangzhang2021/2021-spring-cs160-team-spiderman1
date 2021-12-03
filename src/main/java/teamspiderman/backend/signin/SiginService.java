package teamspiderman.backend.signin;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import teamspiderman.backend.appuser.AppUserService;
import teamspiderman.backend.appuser.GetUserResponse;
import teamspiderman.backend.registration.EmailValidator;

@Service
@AllArgsConstructor
public class SiginService {
    private final AppUserService appUserService;
    private final EmailValidator emailValidator;

    public GetUserResponse signin(SiginRequest request){
        boolean isValidEmail = emailValidator.
                test(request.getEmail());

        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }
        return appUserService.siginUser(request.getEmail(),request.getPassword());
    }
}
