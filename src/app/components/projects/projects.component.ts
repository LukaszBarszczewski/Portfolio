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
      abouts: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      organization: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      groupwork: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use?It is nice to mention good teamwork and cooperation.',
      image: 'assets/img/javascript.png',
      link: '#'
    },
    {
      title: 'World of World.class',
      abouts: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      organization: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      groupwork: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use?It is nice to mention good teamwork and cooperation.',
      image: 'assets/img/dabubble.jpeg',
      link: '#'
    },
    {
      title: 'Pokedex',
      abouts: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      organization: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      groupwork: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use?It is nice to mention good teamwork and cooperation.',
      image: 'assets/img/dabubble.jpeg',
      link: '#'
    }
  ];

  activeProjectIndex = 0;

  selectProject(index: number) {
    this.activeProjectIndex = index;
  }
}
