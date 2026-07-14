package com.example.BookStoreBackend.repository;

import com.example.BookStoreBackend.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}