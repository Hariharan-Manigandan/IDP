import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myname:any
  mypass:any
  nam:any
  pass:any
  login(a:any,b:any){

   this.nam=localStorage.getItem("Email");
   this.pass=localStorage.getItem("Password");


   console.log(this.nam)

    this.myname=a;

    this.mypass=b;

    if(this.nam==this.myname && this.pass==this.mypass ){    

      alert("logged in")

    }

    else{

      alert("Username or Password is invalid")

    }
}
}
