import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../../models/Teacher';
import { TeacherService } from '../../../../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private teacherService: TeacherService,private router: Router) { }

  teacher : Teacher;
  name : string;
  groupid : number;
  username : string;
  password : string;

  ngOnInit() {
  }

  signup(){
    this.teacher = {
      name: this.name,
      groupid: this.groupid,
      username: this.username,
      password: this.password
    };
    
    this.teacherService.createTeacher(this.teacher).subscribe(res => {
      let resStr = JSON.stringify(res);
      let resJSON = JSON.parse(resStr);
      if (resJSON.statusCode===1){
        alert("Teacher created.");
        this.router.navigate(['../teachers']);
      }else if(resJSON.statusCode===-40){
        alert("Password must be at least 8 characters.");
      }else if(resJSON.statusCode===-41){
        alert("Password must contain at least one uppercase letter, lowercase letter, sign and number.");
      }else if(resJSON.statusCode===-42){
        alert("Password has been used before.");
      }else{
        alert("Internal server error at backend.");
      }
    },Error => {
        alert("failed while requesting")
      })

  }

}
