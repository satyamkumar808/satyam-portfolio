import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './component/profile/profile/profile.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NotFoundComponent } from './component/not-found/not-found/not-found.component';
import { SkillCardComponent } from './component/skill-card/skill-card/skill-card.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardOptionComponent } from './component/dashboard-option/dashboard-option.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavBarComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    SkillCardComponent,
    AboutComponent,
    ProjectCardComponent,
    DashboardComponent,
    DashboardOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
