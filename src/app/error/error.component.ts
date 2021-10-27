import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rate1=5;
  rate:any;
  principle:any;
  month:any;
  chng:any
  mydata:any;


  func(myval1:any){
    if(myval1=="HomeLoan"){
      this.rate1=5;
    }
    if(myval1=="VehicleLoan"){
      this.rate1=6;
    }
    if(myval1=="Personal Loan"){
      this.rate1=7;
    }
    if(myval1=="Educational Loan"){
      this.rate1=8;
    }

  }
  cal(principle:any,month:any,rate:any){

    this.principle=principle;

    this.month=month;

    this.rate=rate;

    var a=this.principle*this.month*this.rate;

    var b=a/100;
    this.chng="The Simple intrest value"+b;

    console.log(b)

  }
}
