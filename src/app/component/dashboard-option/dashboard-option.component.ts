import { Component, Input } from '@angular/core';
import { DashboardOption } from '../../Types/dashboard';

@Component({
  selector: 'app-dashboard-option',
  templateUrl: './dashboard-option.component.html',
  styleUrl: './dashboard-option.component.css'
})
export class DashboardOptionComponent {

  @Input()
  dashBoardOption : DashboardOption = {OptionImg: "", OptionLink: "", OptionName: ""};
}
