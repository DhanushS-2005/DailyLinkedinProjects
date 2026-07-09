package com.dhanush.HelloWorld.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dhanush.HelloWorld.models.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email);
}
