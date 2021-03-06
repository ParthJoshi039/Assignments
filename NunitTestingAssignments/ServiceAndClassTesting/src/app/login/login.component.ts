import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthenticationService) { }

  needLogin() {
    return !this.AuthService.IsAuthenticated();
  }

  ngOnInit(): void {
  }

}
