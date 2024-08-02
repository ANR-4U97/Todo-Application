import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateUserService } from '../service/authentication/authenticate-user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService implements CanActivate{

  constructor(private authenticateUse:AuthenticateUserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authenticateUse.isUserLoggedIn())
      return true;
    return false;
  }
}
