package com.example.LibraryManagementSystem.service;

import com.example.LibraryManagementSystem.entity.Book;
import com.example.LibraryManagementSystem.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository repository;

    public BookService(BookRepository repository){
        this.repository = repository;
    }

    public List<Book> getAllBooks(){
        return repository.findAll();
    }

    public Book saveBook(Book book){
        return repository.save(book);
    }

    public void deleteBook(Long id){
        repository.deleteById(id);
    }

    public Book getBook(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Book updateBook(Long id, Book book) {

        Book existing = repository.findById(id).orElseThrow();

        existing.setTitle(book.getTitle());
        existing.setPrice(book.getPrice());
        existing.setAuthor(book.getAuthor());

        return repository.save(existing);
    }

    public List<Book> searchBook(String keyword){

        return repository.findByTitleContainingIgnoreCase(keyword);

    }

}