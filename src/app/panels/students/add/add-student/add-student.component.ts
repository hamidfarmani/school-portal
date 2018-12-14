import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../models/Student';
import { Router } from '@angular/router';
import { StudentService } from '../../../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private StudentService: StudentService,private router: Router) { }

  Student : Student;
  name : string;
  groupid : number;
  username : string;
  password : string;

  ngOnInit() {
  }

  signup(){
    this.Student = {
      name: this.name,
      groupid: this.groupid,
      username: this.username,
      password: this.password
    };
    
    this.StudentService.createStudent(this.Student).subscribe(res => {
      let resStr = JSON.stringify(res);
      let resJSON = JSON.parse(resStr);
      if (resJSON.statusCode===1){
        alert("Student created.");
        this.router.navigate(['../students']);
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
