import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  private arrTeachers = [];

  constructor(private teacherService: TeacherService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllTeachers();
  }

  getAllTeachers() {
    this.teacherService.getAll().subscribe(
      res =>{
        this.arrTeachers = res;
      },
      error => {
        
      }
  );
  }

}
