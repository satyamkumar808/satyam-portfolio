import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { UserProfile } from '../Types/user';
import { PROFILE_URL } from '../constant/api';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  getProfile(userEmail: string): Observable<UserProfile>{
    return this.http.get<UserProfile>(environment.API_BASE_URL+PROFILE_URL+`/${userEmail}`).pipe(
      tap((u: UserProfile) => console.log(u, "User Profile call for: "+u)),
      catchError((e:any): Observable<UserProfile> => {
        console.error(e, "Error while getting profile for: ", userEmail)
        if(e.status == 401){
          localStorage.removeItem('Tocken');
          localStorage.removeItem('User');
          this.router.navigate(['/login']);
        }
        return e;
      })
    )
  }

  isLoggedIn() :boolean {
    return localStorage.getItem('Tocken') ?  true :  false;
  }

}
