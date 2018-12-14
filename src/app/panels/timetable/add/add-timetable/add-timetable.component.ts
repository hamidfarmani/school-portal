import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimetableService } from '../../../../services/timetable.service';
import { Timetable } from '../../../../models/timetable';
import { LessonService } from '../../../../services/lesson.service';
import { StudentGroupService } from '../../../../services/studentgroup.service';
import { TeacherService } from '../../../../services/teacher.service';
import { ClassRoomService } from '../../../../services/classroom.service';

@Component({
  selector: 'app-add-timetable',
  templateUrl: './add-timetable.component.html',
  styleUrls: ['./add-timetable.component.css']
})
export class AddTimetableComponent implements OnInit {

  constructor(private lessonService: LessonService,
    private stdGpService: StudentGroupService,
    private teacherService: TeacherService,
    private roomService: ClassRoomService,
    private timetableService: TimetableService,private router: Router) { }

    days = [{
      id: '0',
      name: 'Saturday'
     },
     {
      id: '1',
      name: 'Sunday'
     },
     {
      id: '2',
      name: 'Monday'
     },
     {
      id: '3',
      name: 'Tuesday'
     },
     {
      id: '4',
      name: 'Wednesday'
     },
     {
      id: '5',
      name: 'Thursday'
     },
     {
      id: '6',
      name: 'Friday'
     }];


     times = [
     {
      id: '1',
      name: '08-10'
     },
     {
      id: '2',
      name: '10-12'
     },
     {
      id: '3',
      name: '13-15'
     },
     {
      id: '4',
      name: '15-17'
     },
     {
      id: '5',
      name: '17-19'
     }]

  arrRooms = [];
  arrLessons = [];
  arrTeachers = [];
  arrStdgroups = [];
  selectedRoom : any;
  selectedTime : any;
  selectedDay : any;
  selectedLesson : any;
  selectedTeacher : any;
  selectedStdgroup : any;

  timetable : Timetable;

  ngOnInit() {
    this.getAllTeachers();
    this.getAllStdGroups();
    this.getAllLessons();
    this.getAllClassrooms();
  }

  create(){
    this.timetable = {
      classid: this.selectedRoom.id,
      day: this.selectedDay.id,
      time: this.selectedTime.id,
      teacherid: this.selectedTeacher.id,
      studentgroupid: this.selectedStdgroup.id,
      lessonid: this.selectedLesson.id
    };
    
    this.timetableService.createTimetable(this.timetable).subscribe(res => {
      let resStr = JSON.stringify(res);
      let resJSON = JSON.parse(resStr);
      if (resJSON.statusCode===1){
        alert("timetable created.");
        this.router.navigate(['../timetables']);
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

  getAllLessons() {
    this.lessonService.getAll().subscribe(
      res =>{
        this.arrLessons = res;
      },
      error => {
        
      }
  );
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

  getAllStdGroups() {
    this.stdGpService.getAll().subscribe(
      res =>{
        this.arrStdgroups = res;
      },
      error => {
        
      }
  );
  }
  getAllClassrooms() {
    this.roomService.getAll().subscribe(
      res =>{
        this.arrRooms = res;
      },
      error => {
        
      }
  );
  }

}
