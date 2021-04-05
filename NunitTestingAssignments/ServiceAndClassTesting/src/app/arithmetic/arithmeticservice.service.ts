import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticserviceService {

  constructor() { }

  add(a:number,b:number)
  {
    return a+b;
  }
  sub(a:number,b:number)
  {
    return a-b;
  }
  mult(a:number,b:number)
  {
    return a*b;
  }
  div(a:number,b:number)
  {
    return a/b;
  }
  cube(a:number)
  {
    return a*a*a;
  }
}
