package com.example.Pet_Food_Ecommerce.Services;

import com.example.Pet_Food_Ecommerce.Model.Product;
import com.example.Pet_Food_Ecommerce.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProductServices {

    @Autowired
    private final ProductRepo repo;

    public ProductServices(ProductRepo repo) {
        this.repo = repo;
    }

    public List<Product> getAllProducts() {
        return repo.findAll();

    }

    public Product addProduct(Product product) {

        return repo.save(product);
    }

    public boolean deleteproduct(int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    public Product updateProduct(int id, Product product) {
        Optional<Product> existingProduct = repo.findById(id);

        if (existingProduct.isPresent()) {

            Product p = existingProduct.get();

            // update fields
            p.setName(product.getName());
            p.setCategory(product.getCategory());
            p.setPrice(product.getPrice());
//            p.setImage(newProduct.getImage());

            return repo.save(p);
        }

        return null;

    }

    }
