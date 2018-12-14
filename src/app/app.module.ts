import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

//routing component
import { AppRoutingModule } from './app-routing.module';

//pages component
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeachersComponent } from './panels/teachers/teachers.component';
import { AddTeacherComponent } from './panels/teachers/add/add-teacher/add-teacher.component';
import { TeacherService } from './services/teacher.service';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './pages/content/content.component';
import { LessonGroupsComponent } from './panels/lesson-groups/lesson-groups.component';
import { LessonsComponent } from './panels/lessons/lessons.component';
import { StudentGroupsComponent } from './panels/student-groups/student-groups.component';
import { StudentsComponent } from './panels/students/students.component';
import { ParentsComponent } from './panels/parents/parents.component';
import { ClassRoomsComponent } from './panels/class-rooms/class-rooms.component';
import { StudentService } from './services/student.service';
import { ParentService } from './services/parent.service';
import { LessonService } from './services/lesson.service';
import { LessonGroupService } from './services/lessongroup.service';
import { ClassRoomService } from './services/classroom.service';
import { StudentGroupService } from './services/studentgroup.service';
import { ModalModule } from '../../node_modules/angular-custom-modal';
import { AddStudentComponent } from './panels/students/add/add-student/add-student.component';
import { TimetableService } from './services/timetable.service';
import { timetableComponent } from './panels/timetable/timetable.component';
import { AddTimetableComponent } from './panels/timetable/add/add-timetable/add-timetable.component';
import { SetMarkComponent } from './panels/students/mark/set-mark/set-mark.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TeachersComponent,
    AddTeacherComponent,
    AddStudentComponent,
    SetMarkComponent,
    ContentComponent,
    LessonGroupsComponent,
    LessonsComponent,
    StudentGroupsComponent,
    StudentsComponent,
    ParentsComponent,
    ClassRoomsComponent,
    timetableComponent,
    AddTimetableComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    MatRadioModule
  ],
  providers: [
    TeacherService,
    StudentService,
    ParentService,
    LessonService,
    LessonGroupService,
    StudentGroupService,
    ClassRoomService,
    TimetableService,
    AuthGuard,
    AuthService
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
