package com.team.spiderman.teamspidermanwebapplication.user;

import java.util.Objects;
import java.util.UUID;

public class UserProfile {
    private int user_id;
    private String email_addr;
    private String user_pw;

    public UserProfile(int user_id, String email_addr, String user_pw) {
        this.user_id = user_id;
        this.email_addr = email_addr;
        this.user_pw = user_pw;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public void setEmail_addr(String email_addr) {
        this.email_addr = email_addr;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public int getUser_id() {
        return user_id;
    }

    public String getEmail_addr() {
        return email_addr;
    }

    public String getUser_pw() {
        return user_pw;
    }

    @Override
    public boolean equals(Object o){
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return Objects.equals(user_id, that.user_id) &&
                Objects.equals(user_pw, that.user_pw) &&
                Objects.equals(email_addr, that.email_addr);

    }





}
