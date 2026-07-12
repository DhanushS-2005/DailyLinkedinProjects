package com.example.LibraryManagementSystem.controller;

import com.example.LibraryManagementSystem.entity.Book;
import com.example.LibraryManagementSystem.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin("*")

public class BookController {

    private final BookService service;

    public BookController(BookService service){
        this.service = service;
    }

    @GetMapping
    public List<Book> getAll(){
        return service.getAllBooks();
    }

    @PostMapping
    public Book save(@RequestBody Book book){
        return service.saveBook(book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id){
        service.deleteBook(id);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return service.getBook(id);
    }

    @PutMapping("/{id}")
    public Book updateBook(
            @PathVariable Long id,
            @RequestBody Book book) {

        return service.updateBook(id, book);
    }

    @GetMapping("/search")
    public List<Book> searchBook(@RequestParam String keyword){

        return service.searchBook(keyword);

    }

}