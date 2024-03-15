import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Projects } from '../Types/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {


  loading :boolean = false;

  projects : Projects[] = [];
  constructor(private projectService: ProjectsService){

  }

  getProjects(){
    this.loading = true;
    this.projectService.getProjects().subscribe(projectArray => {
      this.projects = projectArray
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
