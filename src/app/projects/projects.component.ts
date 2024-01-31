import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Projects } from '../Types/projects';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects : Projects[] = [];
  constructor(private projectService: ProjectsService){

  }

  getProjects(){
    this.projectService.getProjects().subscribe(projectArray => this.projects = projectArray);
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
