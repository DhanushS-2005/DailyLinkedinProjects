 package com.dhanush.HelloWorld;

import java.io.IOException;
import java.util.List;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import com.dhanush.HelloWorld.utils.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

@Component
public class JwtFilter extends OncePerRequestFilter {
	
	@Autowired
	private JwtUtil jwtUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String authHeader = request.getHeader("Authorization");
		System.out.println("Authorization = " + authHeader);

		if (authHeader != null && authHeader.startsWith("Bearer ")) {
		    String token = authHeader.substring(7);
		    System.out.println("Token = " + token);

		    if (jwtUtil.validateJwtToken(token)) {

		        String email = jwtUtil.extractEmail(token);

		        UsernamePasswordAuthenticationToken authentication =
		                new UsernamePasswordAuthenticationToken(
		                        email,
		                        null,
		                        List.of());

		        SecurityContextHolder.getContext().setAuthentication(authentication);

		        System.out.println("Authenticated: " + email);
		    }
		}
		
		filterChain.doFilter(request, response);
	}
}












