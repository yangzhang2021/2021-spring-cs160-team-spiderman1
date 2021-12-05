package teamspiderman.backend.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.amazonaws.services.s3.AmazonS3;

@Configuration
public class AmazonConfig {

    @Bean
    public AmazonS3 S3(){
        AWSCredentials awsCredentials = new BasicAWSCredentials(

                "AKIARXXEMUQVRIK5AY7U",
                "NwY9Hx9aPMW8suoYSejKEhWhAWITg8OrastIJWlK"
        );
        return  AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .withRegion(Regions.US_WEST_1)
                .build();
    }
}
