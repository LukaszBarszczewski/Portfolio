import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Join',
      details: [
        'About the project',
        'How I have organised my work process',
        'What I have learnt'
      ],
      image: 'assets/img/?',
      link: '#'
    },
    {
      title: 'World of World.class',
      details: [
        'About the project',
        'How I have organised my work process',
        'What I have learnt'
      ],
      image: 'assets/img/?',
      link: '#'
    },
    {
      title: 'Pokedex',
      details: [
        'About the project',
        'How I have organised my work process',
        'What I have learnt'
      ],
      image: 'assets/img/?',
      link: '#'
    }
  ];
}
