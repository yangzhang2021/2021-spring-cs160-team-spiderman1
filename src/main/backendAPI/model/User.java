package com.spiderman.backendAPI.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String password;
    private String userName;
    private String address;
    private String phone;
    private String rule;
    private String fullName;
    private String email;



    public User(Long id, String password, String userName, String address, String phone, String rule, String fullName, String email) {
        this.id = id;
        this.password = password;
        this.userName = userName;
        this.address = address;
        this.phone = phone;
        this.rule = rule;
        this.fullName = fullName;
        this.email = email;
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", password='" + password + '\'' +
                ", userName='" + userName + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", rule='" + rule + '\'' +
                ", fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
