import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  IsAuthenticated(): boolean {
      return !!localStorage.getItem('tc');
  }

  constructor() { }
}
