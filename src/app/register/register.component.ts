import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  valid = {
    username: true,
    password: true,
    email: true,
  };
  error = null;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService
      .errorSubject
      .subscribe(errorMessage => {
        this.error = errorMessage;
      });
  }

  validate(type: string): void {
    const usernamePattern = /^[\w-.]*$/;
    const emailPattern = /\S+@\S+\.\S+/;

    if (type === 'username') {
      if (this.username.length < 5) {
        this.valid.username = false;
      } else {
        this.valid.username = usernamePattern.test(this.username);
      }
    } else if (type === 'email') {
      this.valid.email = emailPattern.test(this.email);
    } else if (type === ('confirmPassword' || 'password')) {
      if (this.password !== this.confirmPassword) {
        this.valid.password = false;
      } else {
        this.valid.password = true;
      }
    }
  }

  onKey(event: any, type: string) {
    if (type === 'username') {
      this.username = event.target.value;
    } else if (type === 'email') {
      this.email = event.target.value;
    } else if (type === 'password') {
      this.password = event.target.value;
    } else if (type === 'confirmPassword') {
      this.confirmPassword = event.target.value;
    }
    this.validate(type);
  }

  onRegister(): void {
    if (this.valid.username && this.valid.email && this.valid.password) {
      this.userService
        .register(this.username, this.email, this.password);
    }
  }
}
