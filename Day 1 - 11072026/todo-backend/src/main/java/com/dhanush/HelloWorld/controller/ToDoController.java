package com.dhanush.HelloWorld.controller;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.dhanush.HelloWorld.models.ToDo;
import com.dhanush.HelloWorld.service.ToDoService;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/todo")
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    @PostMapping("/create")
    ResponseEntity<ToDo> createToDo(@RequestBody ToDo toDo) {
        return new ResponseEntity<>(toDoService.createToDo(toDo), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    ResponseEntity<ToDo> getToDoById(@PathVariable Long id){
    	try {
    		return new ResponseEntity<>(toDoService.getTodoById(id), HttpStatus.OK);
    	}
    	catch (RuntimeException exception) {
    		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    	}
    }

    @GetMapping
    ResponseEntity<List<ToDo>> getTodos() {
    	return new ResponseEntity<>(toDoService.getTodos(), HttpStatus.OK);
    }

    @PutMapping
    ResponseEntity<ToDo> updateTodo(@RequestBody ToDo todo) {
    	return new ResponseEntity<>(toDoService.updateTodo(todo), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    void deleteTodoById(@PathVariable Long id) {
    	toDoService.deleteTodoById(id);
    }

    @GetMapping("/page")
    ResponseEntity<Page<ToDo>> getTodoPages(@RequestParam int page, @RequestParam int size) {
    	return new ResponseEntity<>(toDoService.getByPage(page, size), HttpStatus.OK);
    }
}























