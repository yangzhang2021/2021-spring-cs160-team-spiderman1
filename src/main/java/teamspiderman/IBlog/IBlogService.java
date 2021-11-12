package teamspiderman.IBlog;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class IBlogService {
    private final IBlogRepository iBlogRepo;

    public IBlog addIBlog(IBlog iIBlog) {
        return iBlogRepo.save(iIBlog);
    }

    public List<IBlog> getAllIBlogsByuserID(Long id) {
        return iBlogRepo
                .getAllIBlogsByuserID(id)
                .orElseThrow(()->new IBlogNotFoundException("IBlogs for user = "+id+"were not found"));
    }

    public IBlog updateIBlog(IBlog iIBlog) {
        return iBlogRepo.save(iIBlog);
    }

    public IBlog getIBlogById(Long id) {
        return iBlogRepo.getIBlogById(id)
                .orElseThrow(() -> new IBlogNotFoundException("IBlog by id = " + id + " was not found"));
    }

    @Transactional
    public void deleteIBlog(Long id){
        iBlogRepo.deleteIBlogById(id);
    }
}