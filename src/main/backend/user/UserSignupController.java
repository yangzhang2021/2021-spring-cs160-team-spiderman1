package com.team.spiderman.teamspidermanwebapplication.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "*")
public class UserSignupController {
    private final UserSignupService userSignupService;

    @Autowired
    public UserSignupController(UserSignupService userSignupService) {
        this.userSignupService = userSignupService;
    }

    @PostMapping(path = "signup/")
    public void userSignup(@RequestParam("email") String email_addr,
                           @RequestParam("password") String user_pw){
        userSignupService.userSignup(email_addr, user_pw);
    }
}
