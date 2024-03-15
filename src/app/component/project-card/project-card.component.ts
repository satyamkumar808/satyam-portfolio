import { Component, Input, input } from '@angular/core';
import { Projects } from '../../Types/projects';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input()
  project: Projects = {projectId: 1, name: "", description: "", gitLink: ""};
}
