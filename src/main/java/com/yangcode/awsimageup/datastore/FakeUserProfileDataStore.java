package com.yangcode.awsimageup.datastore;


import com.yangcode.awsimageup.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {
    private static final List<UserProfile> USER_PROFILE = new ArrayList<>();
    static{
        USER_PROFILE.add(new UserProfile(UUID.fromString("856021fb-9a30-4e8b-baa1-ca93dea63fb7"), "SpiderMan",null));
        USER_PROFILE.add(new UserProfile(UUID.fromString("63cc28a2-f19d-4c20-ba5a-8d812d4827be"), "SuperMan",null));
    }
    public List<UserProfile> getUserProfile(){
        return USER_PROFILE;
    }
}
