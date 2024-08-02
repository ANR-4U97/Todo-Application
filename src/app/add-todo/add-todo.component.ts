import { Component } from '@angular/core';
import { BackendCallsService } from '../service/dbCalls/backend-calls.service';


export class DataToSave{
  constructor(
    public description:String,
    public status:boolean,
    public estimatedDate:Date
  ){
    
  }
}

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  description:String='';
  status:boolean=false;
  estimatedCompletionDate:Date=new Date();
  data:DataToSave


  constructor(private backendCall: BackendCallsService){
    console.log('from constructor '+this.description);
    console.log(this.estimatedCompletionDate);
   this.data=new DataToSave('',false,new Date());
  }
  saveTodo(){
    this.data=new DataToSave(this.description,this.status,this.estimatedCompletionDate);
    const storedValue = sessionStorage.getItem('authenticatedUser'); 
    if(storedValue){
      let userName = storedValue;
      this.backendCall.postTodo(userName,this.data).subscribe(response=>console.log('response from post '+response));
    }
    
  }

  ngOnInit(){
   
  }

}
