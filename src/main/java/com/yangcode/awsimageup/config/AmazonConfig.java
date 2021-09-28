package com.yangcode.awsimageup.config;


import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.yangcode.awsimageup.profile.UserProfileService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonConfig {
    @Bean
    public AmazonS3 s3(){
        AWSCredentials awsCredentials = new BasicAWSCredentials(

                "AKIA6HLIK7ZDGJ6FYW7M",
                "YyxtMj40XaMA0FH9cxQORIJJZxpuxmqSy/Q16Pgo"
        );
        return  AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .withRegion(Regions.US_WEST_1)
                .build();
    }


}
