package com.example.Pet_Food_Ecommerce.Repo;

import com.example.Pet_Food_Ecommerce.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo  extends JpaRepository<Product, Integer> {
}
