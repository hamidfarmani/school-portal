import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  private arrLessons = [];

  constructor(private lessonService: LessonService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.lessonService.getAll().subscribe(
      res =>{
        this.arrLessons = res;
      },
      error => {
        
      }
  );
  }
}
