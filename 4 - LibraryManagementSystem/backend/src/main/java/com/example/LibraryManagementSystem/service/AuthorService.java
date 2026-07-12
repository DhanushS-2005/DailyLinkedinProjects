package com.example.LibraryManagementSystem.service;

import com.example.LibraryManagementSystem.entity.Author;
import com.example.LibraryManagementSystem.repository.AuthorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {

    private final AuthorRepository repository;

    public AuthorService(AuthorRepository repository) {
        this.repository = repository;
    }

    public List<Author> getAllAuthors(){
        return repository.findAll();
    }

    public Author saveAuthor(Author author){
        return repository.save(author);
    }

    public void deleteAuthor(Long id) {
        repository.deleteById(id);
    }

    public Author getAuthor(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Author updateAuthor(Long id, Author author) {

        Author existing = repository.findById(id).orElseThrow();

        existing.setName(author.getName());

        return repository.save(existing);
    }

}