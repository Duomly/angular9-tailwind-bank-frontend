import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:4200/login';
  isLoggedIn = false;
  userSubject = new BehaviorSubject<any>(null);
  errorSubject = new BehaviorSubject<any>(null);
  user = this.userSubject.asObservable();
  errorMessage = this.errorSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(Username: string, Password: string): any {
    this.http.post(this.url, { Username, Password }, httpOptions).toPromise().then((res: any) => {
      if (res.Data && res.Data.length) {
        this.userSubject.next(res.Data[0]);
        this.errorSubject.next(null);
        this.isLoggedIn = true;
        this.router.navigateByUrl('/dashboard');
      } else if (res.Message) {
        this.userSubject.next(null);
        this.errorSubject.next(res.Message);
      }
    });
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
