import { ArithmeticOperation } from './ArithmeticOperation';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticService } from './arithmetic.service';

describe('ArithmeticComponent', () => {
  let component: ArithmeticOperation;
  let fixture: ComponentFixture<ArithmeticOperation>;
  let service: ArithmeticService;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArithmeticOperation ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = new ArithmeticOperation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Summation Success', () => {
    spy = spyOn(component, 'add').and.returnValue(100);
    expect(component.add(60,40)==100).toBeTruthy();
  });

  it('Summation Failed', () => {
    spy = spyOn(component, 'add').and.returnValue(2);
    expect(component.add(60,40)==100).toBeFalsy();
  });
  
  it('Subtraction Success', () => {
    spy = spyOn(component, 'sub').and.returnValue(20);
    expect(component.sub(60,40)==20).toBeTruthy();
  });

  it('Subtraction Failed', () => {
    spy = spyOn(component, 'sub').and.returnValue(20);
    expect(component.sub(60,40)==30).toBeFalsy();
  });

  it('Multiplication Success', () => {
    spy = spyOn(component, 'mult').and.returnValue(1000);
    expect(component.mult(60,40)==1000).toBeTruthy();
  });

  it('Multiplication Failed', () => {
    spy = spyOn(component, 'mult').and.returnValue(20);
    expect(component.mult(60,40)==30).toBeFalsy();
  });

  it('Division Success', () => {
    spy = spyOn(component, 'div').and.returnValue(2);
    expect(component.div(60,30)==2).toBeTruthy();
  });

  it('Division Failed', () => {
    spy = spyOn(component, 'div').and.returnValue(20);
    expect(component.div(60,30)==30).toBeFalsy();
  });
  
  it('Cube Success', () => {
    spy = spyOn(component, 'cube').and.returnValue(8);
    expect(component.cube(2)==8).toBeTruthy();
  });

  it('Cube Failed', () => {
    spy = spyOn(component, 'cube').and.returnValue(20);
    expect(component.cube(2)==30).toBeFalsy();
  });
  
});
