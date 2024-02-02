import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginUser } from '../Types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService){}

  loginForm = new FormGroup({
    userEmail : new FormControl<String>(''),
    userPassword : new FormControl<String>('')
  });

  onLogin(){
    let loginUser: LoginUser = {
      userEmail : this.loginForm.controls.userEmail.value ?? "",
      userPassword : this.loginForm.value.userPassword ?? ""
    }
    this.loginService.login(loginUser).subscribe(
      user => {
        localStorage.setItem("Tocken", user.tocken);
        localStorage.setItem("User", user.userName);
      }
    )
  }

}
