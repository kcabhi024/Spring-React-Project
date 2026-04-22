package com.example.Simple_Login_Registeration.Repo;

import com.example.Simple_Login_Registeration.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);
}
