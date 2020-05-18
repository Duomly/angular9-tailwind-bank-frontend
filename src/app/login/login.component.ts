import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  error = null;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService
      .errorMessage
      .subscribe(errorMessage => {
        this.error = errorMessage;
      });
  }

  onKey(event: any, type: string) {
    if (type === 'username') {
      this.username = event.target.value;
    } else if (type === 'password') {
      this.password = event.target.value;
    }
  }

  onSubmit() {
    this.loginService
      .login(this.username, this.password)
  }
}
