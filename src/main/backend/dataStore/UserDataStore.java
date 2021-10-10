package com.team.spiderman.teamspidermanwebapplication.dataStore;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class UserDataStore {

    private final DatabaseController databaseController;

    @Autowired
    public UserDataStore(DatabaseController databaseController) {
        this.databaseController = databaseController;
    }

    public void storeUserInfo(int user_id, String email_addr, String user_pw){
        this.databaseController.creatDB("user_db");
        this.databaseController.creatTable("user_info");
        this.databaseController.insertToTable("user_info", user_id, email_addr, user_pw);
    }




}
