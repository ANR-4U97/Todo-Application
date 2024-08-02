import { Component } from '@angular/core';
import { AuthenticateUserService } from '../service/authentication/authenticate-user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name:String='';

  constructor(public authenticateUser:AuthenticateUserService, private router:ActivatedRoute){

  }

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name') || ''; // Use an empty string if 'name' is not provided
    });
  }



}
