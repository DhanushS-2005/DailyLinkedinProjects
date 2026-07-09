package com.dhanush.HelloWorld.service;

import org.springframework.stereotype.Service;
import com.dhanush.HelloWorld.models.User;
import com.dhanush.HelloWorld.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	public User getUserById(Long id) {
    	return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User Not Found"));
    }
	
}
