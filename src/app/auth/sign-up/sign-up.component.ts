import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthServiceService}  from '../auth-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public authService:AuthServiceService,public router:Router) { }

  ngOnInit(): void {
  }
  onSignUpForm(form:NgForm)
  {
    if(form.invalid)
    {
      return;
    }
    let newUser={
      email:form.value.email,
      password:form.value.password
    }

    this.authService.addUser(newUser)
        .subscribe((items:any)=>{
          if(items.success)
          {
            this.router.navigate(['/login']);
          }
          // else
          // {
          //   //alert("already found")
          // }
        })
      form.resetForm();
  }
}
