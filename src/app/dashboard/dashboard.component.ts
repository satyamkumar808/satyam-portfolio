import { Component } from '@angular/core';
import { DashboardOption } from '../Types/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  optionSelected : boolean = false;

  onOptionClick(): void {
    this.optionSelected = true;
  }
}
