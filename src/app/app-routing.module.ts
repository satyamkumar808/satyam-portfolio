import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './component/profile/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './component/not-found/not-found/not-found.component';

const routes: Routes = [
  {path:"", pathMatch: "full" ,redirectTo:'home'},
  {path:"home", pathMatch:"full", component: HomeComponent},
  {path:"projects", pathMatch:"full", component:ProjectsComponent},
  {path:"login", pathMatch:"full", component:LoginComponent},
  {path:"profile", pathMatch:"full", component:ProfileComponent, canActivate:[authGuard]},
  {path:"*", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
