package com.example.Pet_Food_Ecommerce.Controller;


import com.example.Pet_Food_Ecommerce.Model.Product;
import com.example.Pet_Food_Ecommerce.Services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductServices services;

    public ProductController(ProductServices services) {
        this.services = services;
    }

    @GetMapping
    public List<Product> getProducts(){
        return services.getAllProducts();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return  services.addProduct(product);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){

        boolean deleted = services.deleteproduct(id);
        if(deleted){
            return ResponseEntity.ok("Deleted");
        }
        else {
            return ResponseEntity.ok("Not Deleted");
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable int id,
            @RequestBody Product product) {

        Product updatedProduct = services.updateProduct(id, product);

        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
