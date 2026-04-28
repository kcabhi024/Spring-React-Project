package com.example.Pet_Food_Ecommerce.Repo;

import com.example.Pet_Food_Ecommerce.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo  extends JpaRepository<User, Integer> {

        User findByEmail(String email);

}
