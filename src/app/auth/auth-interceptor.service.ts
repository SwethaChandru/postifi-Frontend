import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import {LoginComponent} from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("enters interceptor file");
    console.log(JSON.parse(localStorage.getItem('token')));
    const authToken=JSON.parse(localStorage.getItem('token'));
    const authRequest=req.clone({ headers: req.headers.set('Authorization', "Bearer "+authToken)});

    return next.handle(authRequest);
  }
    
}
