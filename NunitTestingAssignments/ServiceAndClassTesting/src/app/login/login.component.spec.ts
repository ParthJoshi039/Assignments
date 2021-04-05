import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { AuthenticationService } from '../authentication.service';

class MockAuthService extends AuthenticationService {
  	authenticated = false;
  
  	isAuthenticated() {
  		return this.authenticated;
  	}
  }

// describe('Component: Login', ()=>{

//   let component: LoginComponent;
//   let service: AuthenticationService;
//   let spy: any;

//   beforeEach(()=>{
//     service =new AuthenticationService;
//     component = new LoginComponent(service);
//   });

//   afterEach(() => {
//     service = null;
//     component = null;
//   });


// });

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthenticationService;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service =new AuthenticationService;
    component = new LoginComponent(service);
  });

  afterEach(() => {
    //service = null;
    //component = null;
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when the user has not been authenticated', () => {
    spy = spyOn(service, 'IsAuthenticated').and.returnValue(false);
    expect(component.needLogin()).toBeTruthy();
    expect(service.IsAuthenticated).toHaveBeenCalled();

});

it('needsLogin returns false when the user has been authenticated', () => {
    spy = spyOn(service, 'IsAuthenticated').and.returnValue(true);
    expect(component.needLogin()).toBeFalsy();
    expect(service.IsAuthenticated).toHaveBeenCalled();
});

// it('needsLogin returns true when the user has not been authenticated', () => {
//   		service.authenticated = false;
//   		expect(component.needLogin()).toBeTruthy();
//   	});
  
//   	it('needsLogin returns false when the user has been authenticated', () => {
//   		service.authenticated = true;
//   		expect(component.needLogin()).toBeFalsy();
//   	});
});
