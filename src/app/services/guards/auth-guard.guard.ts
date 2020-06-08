import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private login: UserService,

  ) { }

  canActivate(): boolean { 
    if (!this.login.isAuthenticated()) {
      return false;
    } else {
      return true;
    }
  }
}
