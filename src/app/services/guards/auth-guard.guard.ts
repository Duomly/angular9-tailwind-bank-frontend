import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  url = 'http://localhost:4200/api/';
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | any {
    const userId = sessionStorage.getItem('userId');
    const jwtToken = sessionStorage.getItem('jwt');
    const reqHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken,
      })
    };

    if (userId && jwtToken) {
      return this.http.get(`${this.url}user/${userId}`, reqHeader).pipe(
        map(res => {
          if (res['data']['ID'] === Number(userId)) {
            return true;
          } else {
            this.router.navigateByUrl('login');
            return false;
          }
        }),
        catchError((err) => {
          return of(false);
        })
      );
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
