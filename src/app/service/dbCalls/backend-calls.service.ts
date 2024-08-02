import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoList } from 'src/app/list-todos/list-todos.component';
import { Data } from 'src/app/update/update.component';
import { DataToSave } from 'src/app/add-todo/add-todo.component';

@Injectable({
  providedIn: 'root'
})
export class BackendCallsService {
  public description:String='';
  public status:boolean=false;
  private rootPath:String='http://localhost:8080/api/todos/';
  
  constructor(private http:HttpClient) { }

 createTempcode(){
  let userName='user';
  let password='password';
  let authCode='Basic '+window.btoa(userName+":"+password);
  return authCode;
 }

  

  postTodo(userName:String, data:DataToSave){
    return this.http.post(this.rootPath+'saveTodo'+'/'+`${userName}`,data);
  }

  checkUserInDb(userName:String , password:String ){
    let headers=new  HttpHeaders({
      Authorization:this.createTempcode()
    });
    return this.http.get(`http://localhost:8080/api/todos/getUser/${userName}/${password}`,{headers});
  }
  getUserTodos(userName:String){
    return this.http.get<TodoList[]>(`http://localhost:8080/api/todos/userTodo/${userName}`);
  }

  deleteUser(id: number, tempUser:String) {
    return this.http.delete(`http://localhost:8080/api/todos/delete/${id}/${tempUser}`);
  }

  updateUserTodos(user:String, data:Data,id:number){
    return this.http.put(`http://localhost:8080/api/todos/update/${user}/${id}`,data);
  }

}
