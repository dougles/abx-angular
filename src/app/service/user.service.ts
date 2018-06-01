import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  readonly URL: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.URL + "/" + id);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }
  addUser(user: User): Observable<any> {
    return this.http.post(this.URL, user);
  }
  editUser(user: User): Observable<any> {
    return this.http.put<User>(this.URL + "/" + user.id, user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.URL + "/" + id);
  }
}
