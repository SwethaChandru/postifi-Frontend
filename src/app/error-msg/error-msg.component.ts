import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  public message="An unkonown error occured";

  constructor(@Inject(MAT_DIALOG_DATA) public data :{message:string}) { }

  ngOnInit(): void {
  }

}
