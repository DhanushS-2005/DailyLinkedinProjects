package com.dhanush.HelloWorld.utils;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;

@Component
public class JwtUtil {
	private final String SECRET = "dhanush12345678901234567890123456";
	private final Long EXPIRATION = 1000 * 60 * 60l;
	private final SecretKey secretKey =
	        Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));
	
	public String generateToken(String email) {
		return Jwts.builder()
		        .subject(email)
		        .issuedAt(new Date())
		        .expiration(new Date(System.currentTimeMillis() + EXPIRATION))
		        .signWith(secretKey)
		        .compact();
	}
	
	public String extractEmail(String token) {
	    return Jwts.parser()
	            .verifyWith((javax.crypto.SecretKey) secretKey)
	            .build()
	            .parseSignedClaims(token)
	            .getPayload()
	            .getSubject();
	}
	
	public Boolean validateJwtToken(String token) {
	    try {
	        extractEmail(token);
	        return true;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return false;
	    }
	}
}
