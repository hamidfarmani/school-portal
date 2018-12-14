import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeachersComponent } from './panels/teachers/teachers.component';
import { LessonsComponent } from './panels/lessons/lessons.component';
import { ParentsComponent } from './panels/parents/parents.component';
import { ClassRoomsComponent } from './panels/class-rooms/class-rooms.component';
import { LessonGroupsComponent } from './panels/lesson-groups/lesson-groups.component';
import { StudentGroupsComponent } from './panels/student-groups/student-groups.component';
import { StudentsComponent } from './panels/students/students.component';
import { AddTeacherComponent } from './panels/teachers/add/add-teacher/add-teacher.component';
import { AddStudentComponent } from './panels/students/add/add-student/add-student.component';
import { timetableComponent } from './panels/timetable/timetable.component';
import { AddTimetableComponent } from './panels/timetable/add/add-timetable/add-timetable.component';
import { SetMarkComponent } from './panels/students/mark/set-mark/set-mark.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginLayoutComponent } from './layouts/login-layout.component';

const routes: Routes =[

    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
          {path: 'teachers', component: TeachersComponent,
          children: [
              { path: 'add-teacher', component: AddTeacherComponent},
            ]
          },
          {path: 'students', component: StudentsComponent,
          children: [
              { path: 'add-student', component: AddStudentComponent},
              { path: 'set-mark', component: SetMarkComponent},
            ]
          },
          {path: 'studentgroups', component: StudentGroupsComponent},
          {path: 'lessongroups', component: LessonGroupsComponent},
          {path: 'classrooms', component: ClassRoomsComponent},
          {path: 'parents', component: ParentsComponent},
          {path: 'lessons', component: LessonsComponent},
          {path: 'timetables', component: timetableComponent,
          children: [
              { path: 'add-timetable', component: AddTimetableComponent},
            ]
          },
        ]
      },
      
      {
        path: '',
        component: LoginLayoutComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          }
        ]
      },
      { path: '**', redirectTo: '' }

    // {path: 'login', component: LoginComponent},
    // {path: '', component: DashboardComponent,canActivate: [AuthGuard] },

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}