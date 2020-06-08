import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any = null;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService
      .userSubject
      .subscribe(user => {
        this.user = user;
      });
  }
}
