package teamspiderman.backend.signin;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/signin")
@AllArgsConstructor
public class SigninController {
    public final SiginService siginService;

    @PostMapping
    public SigninResponse signin(@RequestBody SiginRequest request){
        System.out.println("request = "+request);
        return siginService.signin(request);
    }

}
