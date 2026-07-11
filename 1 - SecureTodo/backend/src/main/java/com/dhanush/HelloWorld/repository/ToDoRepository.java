package com.dhanush.HelloWorld.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dhanush.HelloWorld.models.ToDo;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
}
