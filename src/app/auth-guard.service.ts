import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthServiceService } from './auth/auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authService:AuthServiceService,public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['/login']);
    return false;
  }
}
