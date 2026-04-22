package com.example.Simple_Login_Registeration.Controller;

import com.example.Simple_Login_Registeration.Model.User;
import com.example.Simple_Login_Registeration.Services.UserServices;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class UserController {

    private final UserServices services;

    public UserController(UserServices services) {
        this.services = services;
    }

    // REGISTER
    @PostMapping("/register")
    public String Userregister(@RequestBody User user) {
        return services.Userregister(user);
    }

    // LOGIN
    @PostMapping("/login")
    public User Userlogin(@RequestBody User user) {
        return services.Userlogin(user);
    }

    // GET USER BY EMAIL
    @GetMapping("/user/{email}")
    public User getUser(@PathVariable String email) {
        return services.getProfile(email);
    }

    // PROFILE
    @GetMapping("/profile/{email}")
    public User getProfile(@PathVariable String email) {
        return services.getProfile(email);
    }

    // CHANGE PASSWORD
    @PostMapping("/change-password")
    public String changePass(@RequestBody User user) {
        return services.changePass(user);
    }
}