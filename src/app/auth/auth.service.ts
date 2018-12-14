import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TeacherService } from '../services/teacher.service';
import { StudentService } from '../services/student.service';
import { ParentService } from '../services/parent.service';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  loginedUser : any;
  get userLogin(){
    return this.loginedUser;
  }

  constructor(
    private router: Router,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private parentService: ParentService
  ) {}

  login(user) {
    if(user.type==='Student'){
      this.studentService.findStudentByUserPass(user).subscribe(res => {
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr);  
        console.log(resJSON);
             
        if (resJSON.statusCode===1){
          this.loginedUser = resJSON.data;
          this.loggedIn.next(true);
          this.router.navigate(['/']);
        }else if(resJSON.statusCode===-2){
          alert("User not Found.");
        }else{
          alert("Internal server error at backend.");
        }
      },Error => {
          alert("failed while requesting")
        });
    }else if(user.type==='Parent'){
      this.parentService.findParentByUserPass(user).subscribe(res => {
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr);
        console.log(resJSON);
        if (resJSON.statusCode===1){
          this.loginedUser = resJSON.data;
          this.loggedIn.next(true);
          this.router.navigate(['/']);
        }else if(resJSON.statusCode===-2){
          alert("User not Found.");
        }else{
          alert("Internal server error at backend.");
        }
      },Error => {
          alert("failed while requesting")
        });
    }else if(user.type==='Teacher'){
        this.teacherService.findTeacherByUserPass(user).subscribe(res => {
          let resStr = JSON.stringify(res);
          let resJSON = JSON.parse(resStr);
          if (resJSON.statusCode===1){
            this.loginedUser = resJSON.data;
            this.loggedIn.next(true);
            this.router.navigate(['/']);
          }else if(resJSON.statusCode===-2){
            alert("User not Found.");
          }else{
            alert("Internal server error at backend.");
          }
        },Error => {
            alert("failed while requesting")
          });
        }
    // }else if(user.type==='Principal'){
    //   this.teacherService.findTeacherByUserPass(user).subscribe(res => {
    //     let resStr = JSON.stringify(res);
    //     let resJSON = JSON.parse(resStr);
    //     if (resJSON.statusCode===1){
    //       this.loggedIn.next(true);
    //       this.router.navigate(['/']);
    //     }else if(resJSON.statusCode===-2){
    //       alert("User not Found.");
    //     }else{
    //       alert("Internal server error at backend.");
    //     }
    //   },Error => {
    //       alert("failed while requesting")
    //     });
    // }
    // if (user.username !== '' && user.password !== '' ) {
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/']);
    // }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}