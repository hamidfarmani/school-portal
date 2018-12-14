import { Component, OnInit } from '@angular/core';
import { ClassRoomService } from '../../services/classroom.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-rooms',
  templateUrl: './class-rooms.component.html',
  styleUrls: ['./class-rooms.component.css']
})
export class ClassRoomsComponent implements OnInit {


  private arrRooms = [];

  constructor(private classService: ClassRoomService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms() {
    this.classService.getAll().subscribe(
      res =>{
        this.arrRooms = res;
      },
      error => {
        
      }
  );
  }
}
