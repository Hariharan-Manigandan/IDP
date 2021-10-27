import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private xyz:ServService) { }

  ngOnInit(): void {
  }
  newnam=""
  abc(){
   
    this.newnam=this.xyz.name
    console.log("hi iam from c2 "+this.newnam)
  }
}
