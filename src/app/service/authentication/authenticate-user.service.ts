import { Injectable } from '@angular/core';
import { BackendCallsService } from '../dbCalls/backend-calls.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor() {

   }

   isUserLoggedIn(){
    if(sessionStorage.getItem('authenticatedUser'))
      return true;
    return false;
   }

   logoutUser(){
    sessionStorage.removeItem('authenticatedUser')
   }

}
