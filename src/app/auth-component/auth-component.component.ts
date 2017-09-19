import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css'],
  providers: [AuthServiceService]
})
export class AuthComponentComponent implements OnInit {


  email: string;
  password: string;

  constructor(private authService: AuthServiceService) {

  }

  login() {
    this.authService.loginService(this.email, this.password);
    this.email = this.password = '';
  }

  ngOnInit() {
    this.authService.checkLogin();
  }

}
