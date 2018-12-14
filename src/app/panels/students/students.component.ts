import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  private arrStudents = [];

  constructor(private studentService: StudentService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAll().subscribe(
      res =>{
        this.arrStudents = res;
      },
      error => {
        
      }
  );
  }

  setMark() {
    this.studentService.getAll().subscribe(
      res =>{
        this.arrStudents = res;
      },
      error => {
        
      }
  );
  }
}
