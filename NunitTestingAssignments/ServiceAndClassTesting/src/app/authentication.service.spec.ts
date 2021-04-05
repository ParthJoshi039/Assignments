import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';


describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
  service = new AuthenticationService();

  });

  afterEach(() => {
    //service = null;
    localStorage.removeItem('tc');
});

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('tc','abcd');
    expect(service.IsAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.IsAuthenticated()).toBeFalsy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
