import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProjectModel } from '../../Types/projects';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {

  constructor(private projectService: ProjectsService, private router: Router){}


  loading: boolean = false;

  addProjectForm = new FormGroup({
    projectName : new FormControl<String>('',[Validators.required]),
    projectDescription : new FormControl<String>('',[Validators.required]),
    projectGitLink : new FormControl<string>('',[Validators.required])
  })

  onAddProjectClick():void {
    this.loading = true;
    let addProject: AddProjectModel = {
      name : this.addProjectForm.controls.projectName.value ?? "",
      description : this.addProjectForm.value.projectDescription ?? "",
      gitLink: this.addProjectForm.controls.projectGitLink.value ?? ""
    }
    this.projectService.addProject(addProject).subscribe(p => {
      this.loading = false;
      this.router.navigate(["/projects"]);
    })
  }
}
