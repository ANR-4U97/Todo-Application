import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorForBasicAuthenticationService  implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let userName='user';
    let password='password';
    let authCode='Basic '+window.btoa(userName+":"+password);
    let request = req.clone({
      setHeaders:
      {
        Authorization:authCode
      }
    })
    return next.handle(request);
  }
}
