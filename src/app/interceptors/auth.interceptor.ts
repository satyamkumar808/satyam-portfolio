import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.userService.isLoggedIn()){
      const clonedReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('Tocken')}`)
      })
      return next.handle(clonedReq);
    }
    return next.handle(request);
  }
}
