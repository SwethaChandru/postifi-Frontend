import {HttpInterceptor,HttpRequest,HttpErrorResponse,HttpHandler} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { catchError, ignoreElements } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {MatDialog} from '@angular/material/dialog'
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{


  constructor(private dialog:MatDialog) { }
  intercept(req:HttpRequest<any>,next:HttpHandler)
  {
    return next.handle(req).pipe(
      catchError((error:HttpErrorResponse)=>{
        let errmsg="an unknown err msg occured";
        if(error.error.message)
        {
          errmsg=error.error.message;
        }
        console.log(error);
        //alert(error.error.message);
        this.dialog.open(ErrorMsgComponent,{data:{message:errmsg}});
        return throwError(error);
      })
    )
  }
}
