package com.example.Simple_Login_Registeration.Services;

import com.example.Simple_Login_Registeration.Model.User;
import com.example.Simple_Login_Registeration.Repo.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServices {

    private final UserRepository repo;

    public UserServices(UserRepository repo) {
        this.repo = repo;
    }

    public String Userregister(User user) {

        User existingUser = repo.findByEmail(user.getEmail());

        if (existingUser != null) {
            return "Email already registered";
        }

        repo.save(user);
        return "User Registered Successfully";
    }

    public User Userlogin(User user) {

        User dbUser = repo.findByEmail(user.getEmail());

        if (dbUser != null && dbUser.getPassword().equals(user.getPassword())) {
            return dbUser;
        }

        return null;
    }

    public User getProfile(String email) {
        return repo.findByEmail(email);
    }

    public String changePass(User user) {

        User userDb = repo.findByEmail(user.getEmail());

        if (userDb == null) {
            return "User not found";
        }

        userDb.setPassword(user.getPassword());
        repo.save(userDb);

        return "Password changed successfully";
    }
}
