package com.example.notesBackend.controller;

import com.example.notesBackend.entity.Note;
import com.example.notesBackend.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class NoteController {

    private final NoteService service;

    @PostMapping
    public Note create(@RequestBody Note note){
        return service.create(note);
    }

    @GetMapping
    public List<Note> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Note getById(@PathVariable Long id){
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Note update(@PathVariable Long id,
                       @RequestBody Note note){
        return service.update(id,note);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }

}