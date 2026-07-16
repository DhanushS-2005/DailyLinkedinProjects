package com.example.notesBackend.service;

import com.example.notesBackend.entity.Note;
import com.example.notesBackend.exception.ResourceNotFoundException;
import com.example.notesBackend.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService{

    private final NoteRepository repository;

    @Override
    public Note create(Note note) {
        return repository.save(note);
    }

    @Override
    public List<Note> getAll() {
        return repository.findAll();
    }

    @Override
    public Note getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Note not found"));
    }

    @Override
    public Note update(Long id, Note note) {

        Note existing = getById(id);

        existing.setTitle(note.getTitle());
        existing.setContent(note.getContent());

        return repository.save(existing);
    }

    @Override
    public void delete(Long id) {

        Note note = getById(id);

        repository.delete(note);

    }
}