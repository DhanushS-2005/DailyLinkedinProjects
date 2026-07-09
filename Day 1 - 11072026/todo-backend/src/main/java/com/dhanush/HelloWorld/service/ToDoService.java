package com.dhanush.HelloWorld.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dhanush.HelloWorld.models.ToDo;
import com.dhanush.HelloWorld.repository.ToDoRepository;

@Service
public class ToDoService {
    @Autowired
    private ToDoRepository toDoRepository;

    public ToDo createToDo( ToDo toDo ) {
        return toDoRepository.save(toDo);
    }

    public ToDo getTodoById(Long id) {
    	return toDoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo Not Found"));
    }

    public List<ToDo> getTodos(){
    	return toDoRepository.findAll();
    }

    public ToDo updateTodo(ToDo todo) {
    	return toDoRepository.save(todo);
    }

    public void deleteTodoById(Long id) {
    	toDoRepository.delete(getTodoById(id));
    }

    public void deleteTodo(ToDo todo) {
    	toDoRepository.delete(todo);
    }

    public Page<ToDo> getByPage(int page, int size) {
    	Pageable pageable = PageRequest.of(page, size);
    	return toDoRepository.findAll(pageable);
    }
}







