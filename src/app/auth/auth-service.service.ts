import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {

  private token:string;
  public authStatusListener=new Subject<boolean>();


  constructor(public http:HttpClient) { }

  getAuthStatusListener()
  {
    return this.authStatusListener.asObservable();
  }

  addUser(newuser:User)
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post("http://localhost:3000/user/signup", newuser);
      //.pipe(map(res => res, { 'headers': headers}));
  }
  isUserLoggedIn() 
  {
    return !(localStorage.getItem('token') === null)
  }
  loginUser(loginuser:User)
  {

    const headers=new Headers();
    headers.append('content-type','application/json');

    return this.http.post("http://localhost:3000/user/login",loginuser);
      //.pipe(map(res => res, { 'headers': headers}));
      
      
  }

}
