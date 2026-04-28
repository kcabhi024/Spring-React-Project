package com.example.Pet_Food_Ecommerce.Services;

import com.example.Pet_Food_Ecommerce.Model.User;
import com.example.Pet_Food_Ecommerce.Repo.UserRepo;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {

    @Autowired
    private  final UserRepo repo;

    public UserServices(UserRepo repo) {
        this.repo = repo;
    }



    public String userReg(User user) {
        User existingUser = repo.findByEmail(user.getEmail());

        if (existingUser !=null){
            return "email Registered Already";
        }
        repo.save(user);
        return "Registerd Sucessfully";

    }

    public User userLogin(User user) {
        User userDb = repo.findByEmail(user.getEmail());

        if (userDb != null && userDb.getPassword().equals(user.getPassword())) {
            return userDb;
        }
        return null;
    }
}
