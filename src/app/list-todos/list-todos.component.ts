import { Component } from '@angular/core';
import { BackendCallsService } from '../service/dbCalls/backend-calls.service';
import { DataSharingService, ShareDataType } from '../service/data/data-sharing.service';
import { Router } from '@angular/router';

export class TodoList{
  constructor(
    public id:number,
    public description:String,
    public estimatedCompletionDate:Date,
    public status:boolean
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {



  constructor(private backendService: BackendCallsService, 
              private dataService:DataSharingService,
              private shareData:DataSharingService,
              private route:Router
    ){}
  
  todo: TodoList[]=[];
  userName:String='';
  tempUser:String ='';
 
  pushData(id:number) {
    console.log(this.todo);
    let descriptionFromList= this.todo[id].description;
    let statusFromList = this.todo[id].status;
    let EstimateDateFromList=this.todo[id].estimatedCompletionDate;
    let index=id;

    const newData: ShareDataType ={
      description :descriptionFromList,
      status :statusFromList,
      index:index,
      estimatedData:EstimateDateFromList

    }

    this.shareData.updateData(newData);
  }
  
  
  deleteItem(id: number) {
    const storedValue = sessionStorage.getItem('authenticatedUser');
    if(storedValue)
      this.tempUser= storedValue; 
    this.backendService.deleteUser(id,this.tempUser).subscribe(response=>console.log(response));
    this.refreshTodos();

   }

  ngOnInit(){
    this.refreshTodos();
   

    }
    refreshTodos(){
      const storedValue = sessionStorage.getItem('authenticatedUser');
      if(storedValue){
      this.userName=storedValue;
      this.backendService.getUserTodos(this.userName).subscribe(response=>{
        console.log(response);
        this.todo=response;
      },
      error=>console.log(error));
    }

  }

  addTodo() {
    console.log('in todod method')
    this.route.navigate(['/saveNewTodo'])
  }

}
