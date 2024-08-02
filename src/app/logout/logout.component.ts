import { Component } from '@angular/core';
import { AuthenticateUserService } from '../service/authentication/authenticate-user.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authenticateUser:AuthenticateUserService){

  }

  ngOnInit(){
    this.authenticateUser.logoutUser();
  }

  

}
