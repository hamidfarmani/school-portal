import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginedUser: any;
  ngOnInit() {
    this.loginedUser = this.authService.userLogin;
  }

  onLogout() {
    this.authService.logout();
  }

}
