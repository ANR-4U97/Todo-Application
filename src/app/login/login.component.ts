import { Component } from '@angular/core';
import { BackendCallsService } from '../service/dbCalls/backend-calls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   userName='in28Minutes';
   password='';

   constructor(private backendCall: BackendCallsService, private route:Router){

   }

   userLogin() {
    this.backendCall.checkUserInDb(this.userName,this.password).subscribe(response=>{
      if(response)
      {
        sessionStorage.setItem('authenticatedUser',this.userName);
        this.route.navigate(["/home",this.userName]);
      }  
      else{
        sessionStorage.removeItem('authenticatedUser');
        console.log("incorrect username and password");
      }
      
    });
    }
  }
  
