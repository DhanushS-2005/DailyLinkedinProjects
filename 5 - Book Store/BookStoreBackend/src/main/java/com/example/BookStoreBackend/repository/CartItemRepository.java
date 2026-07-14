package com.example.BookStoreBackend.repository;

import com.example.BookStoreBackend.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}