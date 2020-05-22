import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private login: LoginService,

  ) { }

  canActivate(): boolean {
    if (!this.login.isAuthenticated) {
      return false;
    } else {
      return true;
    }
  }
}
