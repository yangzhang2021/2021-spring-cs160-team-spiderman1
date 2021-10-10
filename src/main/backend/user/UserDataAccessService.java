package com.team.spiderman.teamspidermanwebapplication.user;

import com.team.spiderman.teamspidermanwebapplication.dataStore.UserDataStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class UserDataAccessService {

    private final UserDataStore userDataStore;

    @Autowired
    public UserDataAccessService(UserDataStore userDataStore) {
        this.userDataStore = userDataStore;
    }

    public void storeUserInfo(int user_id, String email_addr, String user_pw){
        userDataStore.storeUserInfo(user_id, email_addr, user_pw);
    }

    public UserProfile getUserProfile(){
        return null;
    }

    public boolean checkUserId(UUID user_id){
        return false;
    }

    public boolean checkEmailAddr(String email_addr){
        return false;
    }

}
