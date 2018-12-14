import { Component, OnInit } from '@angular/core';
import { StudentGroupService } from '../../services/studentgroup.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-groups',
  templateUrl: './student-groups.component.html',
  styleUrls: ['./student-groups.component.css']
})
export class StudentGroupsComponent implements OnInit {


  private arrStudentGroups = [];

  constructor(private studentGroupService: StudentGroupService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllStudentGroups();
  }

  getAllStudentGroups() {
    this.studentGroupService.getAll().subscribe(
      res =>{
        this.arrStudentGroups = res;
      },
      error => {
        
      }
  );
  }
}
