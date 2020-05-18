import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public login: LoginService,
    public router: Router) { }

  canActivate(): boolean {
    if (!this.login.isAuthenticated()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
