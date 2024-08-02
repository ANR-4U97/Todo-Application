package com.local.basicTodo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.local.basicTodo.entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{

	
	@Query("select u from User u where u.userName=:tempUser")
	 Optional<User> findByName(@Param("tempUser") String tempUser); 

}
