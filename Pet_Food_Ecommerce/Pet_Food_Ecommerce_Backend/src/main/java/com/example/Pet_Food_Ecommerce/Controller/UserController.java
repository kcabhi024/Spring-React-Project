package com.example.Pet_Food_Ecommerce.Controller;

import com.example.Pet_Food_Ecommerce.Model.User;
import com.example.Pet_Food_Ecommerce.Services.UserServices;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")
public class UserController {

    private  final UserServices  services;

    public UserController(UserServices services) {
        this.services = services;
    }

    @PostMapping("/register")
    public String userReg(@RequestBody User user){
        return services.userReg(user);
    }

    @PostMapping("/login")
    public User userLogin(@RequestBody User user){
        return  services.userLogin(user);

    }

}
