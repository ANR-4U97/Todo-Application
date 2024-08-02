package com.local.basicTodo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.local.basicTodo.entity.TodoList;
import com.local.basicTodo.entity.User;
import com.local.basicTodo.repo.TodoListRepo;
import com.local.basicTodo.repo.UserRepo;

@Service
public class TodoService {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private TodoListRepo todoListRepo;


	public void deleteTodo(int id, String tempUser) {
		Optional<User> user = userRepo.findByName(tempUser);
		List<TodoList> todoList = new ArrayList<>(user.get().getTodoList().stream().toList());
		for(int i=0;i<todoList.size();i++) {
			if(i == id-1) {
				
				TodoList removedTodo = todoList.remove(id-1);
				user.get().getTodoList().remove(id-1);
				userRepo.save(user.get());
				todoListRepo.delete(removedTodo);
			}
		}
		
	}

	public String createTodo(User user) {
		List<TodoList> todoList = user.getTodoList().stream().toList();
		todoListRepo.saveAll(todoList);
		userRepo.save(user);
		return "user details saved successfully";
	}

	public boolean checkUser(String userName, String password) {
		List<User> userList = userRepo.findAll();
		for (User user : userList) {
			if (user.getUserName().equals(userName) && user.getPassword().equals(password))
				return true;
		}
		return false;
	}

	public List<TodoList> getUserTodo(String userName) {
		List<TodoList> todoList = new ArrayList<>();
		List<User> userList = userRepo.findAll();
		for(User user: userList) {
			if (user.getUserName().equals(userName)) {
				todoList = user.getTodoList().stream().toList();
			}	
		}
		return todoList;
	}

	public void updateTodo(TodoList data, int id,String UserName) {
		User user = userRepo.findByName(UserName).get();
		List<TodoList> todoList = user.getTodoList().stream().toList();
		//TodoList specificTodo = new TodoList();
		for(int i=0;i<todoList.size();i++) {
			if(i==id) {
				TodoList specificTodo = todoList.get(i);
				specificTodo.setDescription(data.getDescription());
				specificTodo.setStatus(data.getStatus());
				todoListRepo.save(specificTodo);
				break;
			}	
		}		
	}

	public String saveTodo(TodoList data, String userName) {
		User user = userRepo.findByName(userName).get();
		List<TodoList> todoList = new ArrayList<>(user.getTodoList().stream().toList());
		todoList.add(data);
		todoListRepo.saveAll(todoList);
		user.setTodoList(todoList);
		userRepo.save(user);
		
		return null;
	}
}