package com.spiderman.backendAPI.exception;

public class IBlogNotFoundException extends RuntimeException {
    public IBlogNotFoundException(String message) {
        super(message);
    }
}
