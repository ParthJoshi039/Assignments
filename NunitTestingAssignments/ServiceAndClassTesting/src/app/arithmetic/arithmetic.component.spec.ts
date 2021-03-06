import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticComponent } from './arithmetic.component';

import { ArithmeticserviceService } from './arithmeticservice.service';

describe('ArithmeticComponent', () => {
  let component: ArithmeticComponent;
  let fixture: ComponentFixture<ArithmeticComponent>;
  let service: ArithmeticserviceService;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArithmeticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = new ArithmeticserviceService();
    component = new ArithmeticComponent(service);
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', () => {
    spy = spyOn(service, 'add').and.returnValue(100);
    expect(component.add(60,40)).toBeTruthy();
    expect(service.add).toHaveBeenCalled();
  });

  it('Summation Success', () => {
    spy = spyOn(service, 'add').and.returnValue(100);
    expect(component.add(60,40)==100).toBeTruthy();
    expect(service.add).toHaveBeenCalled();
  });

  it('Summation Failed', () => {
    spy = spyOn(service, 'add').and.returnValue(2);
    expect(component.add(60,40)==100).toBeFalsy();
    expect(service.add).toHaveBeenCalled();
  });
  
  it('Subtraction Success', () => {
    spy = spyOn(service, 'sub').and.returnValue(20);
    expect(component.sub(60,40)==20).toBeTruthy();
    expect(service.sub).toHaveBeenCalled();
  });

  it('Subtraction Failed', () => {
    spy = spyOn(service, 'sub').and.returnValue(20);
    expect(component.sub(60,40)==30).toBeFalsy();
    expect(service.sub).toHaveBeenCalled();
  });

  it('Multiplication Success', () => {
    spy = spyOn(service, 'mult').and.returnValue(1000);
    expect(component.mult(60,40)==1000).toBeTruthy();
    expect(service.mult).toHaveBeenCalled();
  });

  it('Multiplication Failed', () => {
    spy = spyOn(service, 'mult').and.returnValue(20);
    expect(component.mult(60,40)==30).toBeFalsy();
    expect(service.mult).toHaveBeenCalled();
  });

  it('Division Success', () => {
    spy = spyOn(service, 'div').and.returnValue(2);
    expect(component.div(60,30)==2).toBeTruthy();
    expect(service.div).toHaveBeenCalled();
  });

  it('Division Failed', () => {
    spy = spyOn(service, 'div').and.returnValue(20);
    expect(component.div(60,30)==30).toBeFalsy();
    expect(service.div).toHaveBeenCalled();
  });
  
  it('Cube Success', () => {
    spy = spyOn(service, 'cube').and.returnValue(8);
    expect(component.cube(2)==8).toBeTruthy();
    expect(service.cube).toHaveBeenCalled();
  });

  it('Cube Failed', () => {
    spy = spyOn(service, 'cube').and.returnValue(20);
    expect(component.cube(2)==30).toBeFalsy();
    expect(service.cube).toHaveBeenCalled();
  });
  
});
