import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selectedType: string;
  types: string[] = ['Student', 'Parent', 'Teacher'];

  username : string;
  password : string;

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.selectedType = 'Student';
  }

  login(){
    this.authService.login({username: this.username, password: this.password,type: this.selectedType});
  }

}
