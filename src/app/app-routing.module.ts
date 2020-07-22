import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MyMessagesComponent } from './posts/my-messages/my-messages.component';
import {AuthGuardService} from './auth-guard.service'
import { ErrorMsgComponent } from './error-msg/error-msg.component';

const routes: Routes = [
  {path:'',component:PostListComponent,canActivate:[AuthGuardService]},
  {path:'create',component:PostCreateComponent,canActivate:[AuthGuardService]},
  {path:'edit/:postId',component:PostCreateComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:'Mypost',component:MyMessagesComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ AuthGuardService]
})
export class AppRoutingModule { }

export const routingComponents = [HeaderComponent,PostCreateComponent,PostListComponent,
                                  LoginComponent,SignUpComponent,MyMessagesComponent,ErrorMsgComponent]
