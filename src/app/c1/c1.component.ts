import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private xyz:ServService) { }
  mine=""

  ngOnInit(): void {
  }
 abc(myname:any){
  this.xyz.dblogic(myname)
   console.log( "HI this is my name "+ myname)
 }
}
