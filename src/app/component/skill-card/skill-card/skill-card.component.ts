import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {

  @Input()
  skillName : string='';
}
