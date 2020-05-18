import { AccountBalanceComponent } from './../account-balance/account-balance.component';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login/login.service';

@Component({
  selector: 'app-dashboard',
  viewProviders: [
    AccountBalanceComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user = null;
  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService
      .user
      .subscribe(user => {
        this.user = user;
      });
  }

}
