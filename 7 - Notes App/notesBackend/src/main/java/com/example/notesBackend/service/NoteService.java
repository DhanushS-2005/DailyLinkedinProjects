package com.example.notesBackend.service;

import com.example.notesBackend.entity.Note;
import java.util.List;

public interface NoteService {

    Note create(Note note);

    List<Note> getAll();

    Note getById(Long id);

    Note update(Long id, Note note);

    void delete(Long id);

}