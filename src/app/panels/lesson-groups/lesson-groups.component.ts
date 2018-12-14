import { Component, OnInit } from '@angular/core';
import { LessonGroupService } from '../../services/lessongroup.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson-groups',
  templateUrl: './lesson-groups.component.html',
  styleUrls: ['./lesson-groups.component.css']
})
export class LessonGroupsComponent implements OnInit {

  
  private arrLessonGroups = [];

  constructor(private lessonGroupService: LessonGroupService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllLessonGroups();
  }

  getAllLessonGroups() {
    this.lessonGroupService.getAll().subscribe(
      res =>{
        this.arrLessonGroups = res;
      },
      error => {
        
      }
  );
  }

}
