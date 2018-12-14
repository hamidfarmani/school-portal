import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"; 
import {Observable} from "rxjs";
import { Response } from '@angular/http';
import { Teacher } from '../models/Teacher';





const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeacherService {

  constructor(private http:HttpClient) {}

  private teacherUrl = 'http://localhost:7585/teachers';
  private loginUrl = 'http://localhost:7585/login';

  getAll(): Observable<any> {
    return this.http.get(this.teacherUrl);
  }

  public findTeacher(id): Observable<Teacher> {
    return this.http.get(this.teacherUrl+"/"+id)
      .pipe(map((response: Response) => response.json()))
  }

  public findTeacherByUserPass(teacher): Observable<any> {
    return this.http.post(this.teacherUrl+"/find",teacher);
  }

  // public deleteUser(userid) {
  //   return this.http.delete(this.userUrl + "/"+ userid);
  // }

  public createTeacher(teacher) {
    return this.http.post<Teacher>(this.teacherUrl, teacher);
  }

  // public updateUser(user) {
  //   alert(user.id);
  //   return this.http.patch<User>(this.userUrl+ "/"+ user.id, user);
  // }

  // public updatePassword(user) {
  //   return this.http.patch<User>(this.userUrl+ "/"+ user.id+"/password", user);
  // }
  // public login(loginuser : LoginUserPass){
  //   return this.http.post(this.loginUrl,loginuser);
  // }

}
