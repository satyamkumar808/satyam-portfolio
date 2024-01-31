import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, PROJECTS_URL } from '../constant/api';
import { Observable, catchError, tap } from 'rxjs';
import { Projects } from '../Types/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects = (): Observable<Projects[]> => {
    return this.http.get<Projects[]>(BASE_URL+PROJECTS_URL).pipe(
      tap(p => console.log(p)),
      catchError((e: any): Observable<Projects[]> => {
        console.error(e, "Error while fetching projects");
        return e;
      })
    );
  }
}
