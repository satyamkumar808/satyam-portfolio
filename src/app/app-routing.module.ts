import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './component/profile/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './component/not-found/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectComponent } from './component/add-project/add-project.component';
import { DashboardHomeComponent } from './component/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {path:"", pathMatch: "full" ,redirectTo:'home'},
  {path:"home", pathMatch:"full", component: HomeComponent},
  {path:"projects", pathMatch:"full", component:ProjectsComponent},
  {path:"login", pathMatch:"full", component:LoginComponent},
  {path:"profile", pathMatch:"full", component:ProfileComponent, canActivate:[authGuard]},
  {path:"dashboard", component: DashboardComponent, canActivate:[authGuard], 
    children: [
      {path:"", pathMatch:"full", component: DashboardHomeComponent},
      {path:"addProject", pathMatch:"full", component: AddProjectComponent}
    ]
  },
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
