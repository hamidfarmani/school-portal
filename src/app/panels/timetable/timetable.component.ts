import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TimetableService } from '../../services/timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class timetableComponent implements OnInit {

  private arrtimetable = [];

  constructor(private timetableService: TimetableService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAlltimetable();
  }

  getAlltimetable() {
    this.timetableService.getAll().subscribe(
      res =>{
        this.arrtimetable = res;
      },
      error => {
        
      }
  );
  }
}
