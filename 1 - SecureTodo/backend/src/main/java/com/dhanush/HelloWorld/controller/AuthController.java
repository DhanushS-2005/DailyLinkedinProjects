package com.dhanush.HelloWorld.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhanush.HelloWorld.models.User;
import com.dhanush.HelloWorld.repository.UserRepository;
import com.dhanush.HelloWorld.service.UserService;
import com.dhanush.HelloWorld.utils.JwtUtil;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/auth")
public class AuthController {
	private final UserRepository userRepository;
	private final UserService userService;
	private final PasswordEncoder passwordEncoder;
	private final JwtUtil jwtUtil;
	
	@Autowired
	public AuthController(UserRepository userRepository,
		UserService userService,
		PasswordEncoder passwordEncoder,
		JwtUtil jwtUtil) {
	    this.userRepository = userRepository;
	    this.userService = userService;
	    this.passwordEncoder = passwordEncoder;
	    this.jwtUtil = jwtUtil;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Map<String, String> body) {
		String email = body.get("email");
		String password = body.get("password");
		
		var userOptional = userRepository.findByEmail(email);
		if ( userOptional.isEmpty() ) {
			return new ResponseEntity<>("User Not Registered", HttpStatus.UNAUTHORIZED);
		}
		
		User user = userOptional.get();
		
		if ( !passwordEncoder.matches(password, user.getPassword())) {
			return new ResponseEntity<>("Invalid User", HttpStatus.UNAUTHORIZED);
		}
		
		String token = jwtUtil.generateToken(email);
		return ResponseEntity.ok(Map.of("token", token));
		
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody Map<String, String> body) {

	    System.out.println(body);

	    String email = body.get("email");
	    String password = body.get("password");

	    System.out.println("Email = " + email);
	    System.out.println("Password = " + password);

	    if (password == null) {
	        return ResponseEntity.badRequest().body("Password is NULL");
	    }

	    if (userRepository.findByEmail(email).isPresent()) {
	        return new ResponseEntity<>("Email already exists", HttpStatus.CONFLICT);
	    }

	    User user = new User();
	    user.setEmail(email);
	    user.setPassword(passwordEncoder.encode(password));

	    userService.createUser(user);

	    return new ResponseEntity<>("Successfully Registered", HttpStatus.CREATED);
	}
}


