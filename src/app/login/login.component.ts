import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginUser } from '../Types/user';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router){}


  loading:boolean = false;
  loginError: boolean = false;
  errorMessage : string = "";

  loginForm = new FormGroup({
    userEmail : new FormControl<String>('',[Validators.email, Validators.required]),
    userPassword : new FormControl<String>('',[Validators.required])
  });

  onErrorOkClick(error:boolean): void {
    this.loginError = error;
    this.errorMessage = "";
  }

  onLogin(){
    this.loading = true;
    let loginUser: LoginUser = {
      userEmail : this.loginForm.controls.userEmail.value ?? "",
      userPassword : this.loginForm.value.userPassword ?? ""
    }
    this.loginService.login(loginUser).subscribe({
      next : (user) => {
          localStorage.setItem("Tocken", user.tocken);
          localStorage.setItem("User", user.userEmail);
          this.loading = false;
          this.router.navigate(['/home']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = "Error while login!."
        this.loginError = true;
      }
    }
    )
  }

}
