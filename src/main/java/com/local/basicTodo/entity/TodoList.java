package com.local.basicTodo.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TodoList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String description;
	private boolean status;
	private Date estimatedCompletionDate;
	
	public boolean getStatus() {
		return this.status;
	}
	
	public void setEstimatedCompletionDate(String date) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-YYYY");
		try {
			this.estimatedCompletionDate=simpleDateFormat.parse(date);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public String getEstimatedCompletionDate() {
		SimpleDateFormat formatDate=new SimpleDateFormat("dd-MM-yyyy");
		return formatDate.format(estimatedCompletionDate);
	}
}
