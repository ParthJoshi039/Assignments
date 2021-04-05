import { Component, OnInit } from '@angular/core';
import { ArithmeticserviceService } from './arithmeticservice.service';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css']
})
export class ArithmeticComponent implements OnInit {

  constructor(private ArithService:ArithmeticserviceService ) { }

  ngOnInit(): void {
  }
  add(a:number,b:number)
  {
    return this.ArithService.add(a,b);
  }
  sub(a:number,b:number)
  {
    return this.ArithService.sub(a,b);
  }
  mult(a:number,b:number)
  {
    return this.ArithService.mult(a,b);
  }
  div(a:number,b:number)
  {
    return this.ArithService.div(a,b);
  }
  cube(a:number)
  {
    return this.ArithService.cube(a);
  }

}
