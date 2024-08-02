import { Component } from '@angular/core';
import { ListTodosComponent, TodoList } from '../list-todos/list-todos.component';
import { ActivatedRoute, CanActivate, Route, Router } from '@angular/router';
import { DataSharingService } from '../service/data/data-sharing.service';
import { BackendCallsService } from '../service/dbCalls/backend-calls.service';

export class Data{
  constructor(
    public id:number,
    public description:String,
    public status:boolean,
    public estimatedCompletionDate:Date 
  ){

  }
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public descriptiontoBeSentToPage:String='';
  public statusToBeSentToPage:boolean=false;
  alertMsg='';

  data:Data;

  constructor( private route:ActivatedRoute, 
      private shareData:DataSharingService,
      private backendCall:BackendCallsService,
      private router:Router
      ){
        this.data = new Data(0, '', false, new Date());
  }


  ngOnInit(){
    
    this.shareData.getData().subscribe(response=>{

      // new Data(response.index,response.description,response.status,response.estimatedData);
      this.data.id=response.index;
      this.data.description=response.description;
      this.data.estimatedCompletionDate=response.estimatedData;
      this.data.status=response.status;
      this.descriptiontoBeSentToPage=response.description;
      this.statusToBeSentToPage=response.status;

    })
  }

  updateTodo() {
    const storedValue = sessionStorage.getItem('authenticatedUser');
    let userName:String='';
    if(storedValue){
      userName=storedValue;
    }
    let id = this.route.snapshot.params['id'];
    this.data.description = this.descriptiontoBeSentToPage;
    this.data.status = this.statusToBeSentToPage;
    this.backendCall.updateUserTodos(userName,this.data,id).subscribe(resposne=>{
      console.log(resposne);
      this.alertMsg='updated successfully';
      //this.router.navigate(['/todos']);
    });
  }
  
  
}
