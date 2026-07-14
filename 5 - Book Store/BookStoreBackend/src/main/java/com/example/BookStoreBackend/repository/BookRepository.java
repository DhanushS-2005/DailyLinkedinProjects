package com.example.BookStoreBackend.repository;

import com.example.BookStoreBackend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}