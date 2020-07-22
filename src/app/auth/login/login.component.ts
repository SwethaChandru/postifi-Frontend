import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { error } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice:AuthServiceService,public router:Router) { }

  public token;

  ngOnInit(): void {
    //localStorage.clear();
    
  }

  onLoginForm(form:NgForm)
  {
    if(form.invalid)
    {
      return
    }
    let loginuser={
      email:form.value.email,
      password:form.value.password
    }
    this.authservice.loginUser(loginuser)
      .subscribe((items:any)=>{
        if(items.success)
        {
        console.log("savedpost");
        console.log(items);
        const token = items.token;
        const id=items.id;
        //localStorage.setItem('userID',)
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('id',JSON.stringify(id));
        this.token=items;
        this.authservice.authStatusListener.next(true);
        this.router.navigate(['/']);
      }
      },error=>{
        form.resetForm();
      })    
  }
}
