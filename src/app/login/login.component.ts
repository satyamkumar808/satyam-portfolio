import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginUser } from '../Types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router){}

  loginForm = new FormGroup({
    userEmail : new FormControl<String>('',[Validators.email, Validators.required]),
    userPassword : new FormControl<String>('',[Validators.required])
  });

  onLogin(){
    let loginUser: LoginUser = {
      userEmail : this.loginForm.controls.userEmail.value ?? "",
      userPassword : this.loginForm.value.userPassword ?? ""
    }
    this.loginService.login(loginUser).subscribe(
      user => {
        localStorage.setItem("Tocken", user.tocken);
        localStorage.setItem("User", user.userEmail);
        this.router.navigate(['/home']);
      }
    )
  }

}
