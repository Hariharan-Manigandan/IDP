import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor() { }
  name=""
  dblogic(xyx:any){
    this.name=xyx;
  }
}
