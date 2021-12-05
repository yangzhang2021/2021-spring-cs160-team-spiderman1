package teamspiderman.backend.bucket;

public enum ProductImageBucketName {

    PRODUCT_IMAGE("spiderman-product-image-upload-123");

    private final String productImageBucketName;


    ProductImageBucketName(String productImageBucketName) {
        this.productImageBucketName = productImageBucketName;
    }

    public String getProductImageBucketName(){
        return productImageBucketName;
    }
}
