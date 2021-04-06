import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../MockCalc/arithmetic.service';

@Component({
  selector: 'app-arithmetic-operation',
  templateUrl: './arithmetic-operation.component.html',
  styleUrls: ['./arithmetic-operation.component.css']
})
export class ArithmeticOperationComponent implements OnInit {

  constructor(private service:ArithmeticService) { }

  ngOnInit(): void {
  }
  // add(a:number,b:number)
  // {
  //   return this.service.add(a,b);
  // }
  // sub(a:number,b:number)
  // {
  //   return this.service.sub(a,b);
  // }
  // mult(a:number,b:number)
  // {
  //   return this.service.mult(a,b);
  // }
  // div(a:number,b:number)
  // {
  //   return this.service.div(a,b);
  // }
  // cube(a:number)
  // {
  //   return this.service.cube(a);
  // }
}
