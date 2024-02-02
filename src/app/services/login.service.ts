import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, User } from '../Types/user';
import { Observable, catchError, tap } from 'rxjs';
import { BASE_URL, LOGIN_URL } from '../constant/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginUser: LoginUser):Observable<User> {
    return this.http.post<User>(BASE_URL+LOGIN_URL, loginUser).pipe(
      tap(u => console.log(u, "user")),
      catchError((e:any):Observable<User> => {
        console.error(e, "Error while login -> "+loginUser.userEmail);
        return e;
      })
    )
  }
}
