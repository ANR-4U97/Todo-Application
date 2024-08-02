package com.local.basicTodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.local.basicTodo.entity.TodoList;
import com.local.basicTodo.entity.User;
import com.local.basicTodo.service.TodoService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/todos")
public class TodoController {

	@Autowired
	private TodoService todoService;

	@PostMapping("create/{userName}")
	public ResponseEntity<String> createTodo(@RequestBody User user, @PathVariable String userName) {
		return new ResponseEntity<>(todoService.createTodo(user), HttpStatus.CREATED);
	}

	@GetMapping("/userTodo/{userName}")
	public ResponseEntity<List<TodoList>> getUserTodo(@PathVariable String userName) {
		return new ResponseEntity<>(todoService.getUserTodo(userName), HttpStatus.OK);

	}

	@GetMapping("/getUser/{userName}/{password}")
	public ResponseEntity<Boolean> checkUser(@PathVariable String userName, @PathVariable String password){
		return new ResponseEntity<>(todoService.checkUser(userName,password), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}/{tempUser}")
	public void deleteTodo(@PathVariable int id , @PathVariable String tempUser) {
		todoService.deleteTodo(id,tempUser);
	}
	
	@PutMapping("update/{userName}/{id}")
	public void updateTodo(@RequestBody TodoList data, @PathVariable int id, @PathVariable String userName) {
		todoService.updateTodo(data,id,userName);
	}
	
	@PostMapping("saveTodo/{userName}")
	public ResponseEntity<String> saveTodo(@RequestBody TodoList todoList, @PathVariable String userName) {
		return new ResponseEntity<>(todoService.saveTodo(todoList,userName), HttpStatus.CREATED);
	}
	

}
