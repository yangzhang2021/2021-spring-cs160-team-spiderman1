package com.yangcode.awsimageup.profile;

import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

public class UserProfile {

    private final UUID userProfileID;
    private final String userName;
    private String userProfileImageLink; //s3 Key

    public UserProfile(UUID userProfileID,
                       String userName,
                       String userProfileImageLink) {
        this.userProfileID = userProfileID;
        this.userName = userName;
        this.userProfileImageLink = userProfileImageLink;
    }

    public UUID getUserProfileID() {
        return userProfileID;
    }



    public String getUserName() {
        return userName;
    }



    public Optional<String> getUserProfileImageLink() {
        return Optional.ofNullable(userProfileImageLink);
    }

    public void setUserProfileImageLink(String userProfileImageLink) {
        this.userProfileImageLink = userProfileImageLink;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return Objects.equals(userProfileID, that.userProfileID) &&
                Objects.equals(userName,that.userName) &&
                Objects.equals(userProfileImageLink, that.userProfileImageLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userProfileID, userName, userProfileImageLink);
    }
}
