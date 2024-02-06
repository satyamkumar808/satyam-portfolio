import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private router: Router){

  }

  local: Storage = localStorage;

  onLogOut():void {
    localStorage.removeItem('Tocken');
    localStorage.removeItem('User');
    this.router.navigate(['/home']);
  }

}
