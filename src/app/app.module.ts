import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthInterceptorService} from './auth/auth-interceptor.service';
import {ErrorInterceptorService} from './error-interceptor.service';
import {MatDialogModule} from '@angular/material/dialog'

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,CommonModule,BrowserAnimationsModule,HttpClientModule,
    MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatDialogModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}],
  bootstrap: [AppComponent],
  entryComponents:[ErrorMsgComponent]
})
export class AppModule { }
