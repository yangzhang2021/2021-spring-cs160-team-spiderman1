package com.team.spiderman.teamspidermanwebapplication.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserSignupService {

    private final UserDataAccessService userDataAccessService;

    @Autowired
    public UserSignupService(UserDataAccessService userDataAccessService) {
        this.userDataAccessService = userDataAccessService;
    }

    public void userSignup(String email_addr,  String user_pw){
        //to do
        //need to check if the user_id, email_addr exist.

        String uuid_str = UUID.randomUUID().toString().replaceAll("-", "");
        uuid_str = uuid_str.substring(0, 5);
        int uuid = Integer.parseInt(uuid_str);
        UserProfile new_user = new UserProfile(uuid, email_addr, user_pw);
        userDataAccessService.storeUserInfo(new_user.getUser_id(), new_user.getEmail_addr(), new_user.getUser_pw());

    }

}
