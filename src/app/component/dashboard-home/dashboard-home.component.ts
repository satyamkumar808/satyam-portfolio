import { Component } from '@angular/core';
import { DashboardOption } from '../../Types/dashboard';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {


  dashboardOptions: DashboardOption[] = [
    {OptionImg: "", OptionLink: "addProject", OptionName: "Add Project"},
    {OptionImg: "", OptionLink: "removeProject", OptionName: "Remove Project"},
    {OptionImg: "", OptionLink: "updateProject", OptionName: "Update Project"}
  ]
}
