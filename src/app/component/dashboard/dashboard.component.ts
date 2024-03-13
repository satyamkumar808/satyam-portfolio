import { Component } from '@angular/core';
import { DashboardOption } from '../../Types/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  dashboardOptions: DashboardOption[] = [
    {OptionImg: "", OptionLink: "", OptionName: "Add Project"},
    {OptionImg: "", OptionLink: "", OptionName: "Remove Project"},
    {OptionImg: "", OptionLink: "", OptionName: "Update Project"}
  ]
}
