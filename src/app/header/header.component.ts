import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  public isToken;
  private authListenerSubs:Subscription;
  public userIsAuth=localStorage.getItem('token')!=null?true:false;
  //public userIsAuth=false;
  constructor(private authService:AuthServiceService,public router:Router) { }

  ngOnInit(): void {
    console.log("entered headers on init function");
    this.authListenerSubs=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
      this.userIsAuth=isAuthenticated;
    });
    console.log(this.userIsAuth);
  }
  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.authService.authStatusListener.next(false);
  } 

  ngOnDestroy():void{

    this.authListenerSubs.unsubscribe();
  }
 
  

}
