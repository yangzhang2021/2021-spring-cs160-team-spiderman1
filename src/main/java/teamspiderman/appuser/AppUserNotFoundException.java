package teamspiderman.appuser;

public class AppUserNotFoundException extends RuntimeException{
    public AppUserNotFoundException(String message) {
        super(message);
    }
}
