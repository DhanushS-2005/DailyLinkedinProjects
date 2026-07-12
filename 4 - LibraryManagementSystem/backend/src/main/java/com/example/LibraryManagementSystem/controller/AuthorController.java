package com.example.LibraryManagementSystem.controller;

import com.example.LibraryManagementSystem.entity.Author;
import com.example.LibraryManagementSystem.service.AuthorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/authors")
@CrossOrigin("*")

public class AuthorController {

    private final AuthorService service;

    public AuthorController(AuthorService service){
        this.service = service;
    }

    @GetMapping
    public List<Author> getAll(){
        return service.getAllAuthors();
    }

    @PostMapping
    public Author save(@RequestBody Author author){
        return service.saveAuthor(author);
    }

    @DeleteMapping("/{id}")
    public void deleteAuthor(@PathVariable Long id) {
        service.deleteAuthor(id);
    }

    @GetMapping("/{id}")
    public Author getAuthor(@PathVariable Long id) {
        return service.getAuthor(id);
    }

    @PutMapping("/{id}")
    public Author updateAuthor(
            @PathVariable Long id,
            @RequestBody Author author) {

        return service.updateAuthor(id, author);
    }

}