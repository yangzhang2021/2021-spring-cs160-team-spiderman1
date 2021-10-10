package com.spiderman.backendAPI.exception;

public class ImgNotFoundException extends RuntimeException {
    public ImgNotFoundException(String message) {
        super(message);
    }
}
