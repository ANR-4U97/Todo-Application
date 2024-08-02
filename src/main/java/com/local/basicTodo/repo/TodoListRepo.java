package com.local.basicTodo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.local.basicTodo.entity.TodoList;

public interface TodoListRepo extends JpaRepository<TodoList, Integer>{

}
