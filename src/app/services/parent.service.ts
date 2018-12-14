import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import { Response } from '@angular/http';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ParentService {

  constructor(private http:HttpClient) {}

  private parentUrl = 'http://localhost:7585/parents';
  private loginUrl = 'http://localhost:7585/login';

  getAll(): Observable<any> {
    return this.http.get(this.parentUrl);
  }

  public findParentByUserPass(parent): Observable<any> {
    return this.http.post(this.parentUrl+"/find",parent);
  }

  // public findParent(id): Observable<Parent> {
  //   return this.http.get(this.parentUrl+"/"+id)
  //     .map((response: Response) => response.json())
  // }

  // public deleteUser(userid) {
  //   return this.http.delete(this.userUrl + "/"+ userid);
  // }

  // public createUser(user) {
  //   return this.http.post<User>(this.userUrl, user);
  // }

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
