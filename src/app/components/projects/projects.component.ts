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
      image: 'assets/img/join.png',
      link: 'https://github.com/johannesngl/join',
      live: 'http://join.lukasz-barszczewski.de/',
      technologies: '<img src="assets/img/js-no-txt.png" alt="JavaScript"> <img src="assets/img/html-no-txt.png" alt="HTML"> <img src="assets/img/css-no-txt.png" alt="CSS"> <img src="assets/img/firebase-no-txt.png" alt="Firebase">'
    },
    {
      title: 'World of World.class',
      abouts: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      organization: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      groupwork: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use?It is nice to mention good teamwork and cooperation.',
      image: 'assets/img/wowc.png',
      link: 'https://github.com/LukaszBarszczewski/World-of-World.class',
      live: 'http://world-of-world.class.lukasz-barszczewski.de/',
      technologies: '<img src="assets/img/js-no-txt.png" alt="JavaScript"> <img src="assets/img/html-no-txt.png" alt="HTML"> <img src="assets/img/css-no-txt.png" alt="CSS">'
    },
    {
      title: 'Pokedex',
      abouts: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      organization: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      groupwork: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use?It is nice to mention good teamwork and cooperation.',
      image: 'assets/img/pokedex.png',
      link: 'https://github.com/LukaszBarszczewski/Pokedex',
      live: 'http://pokedex.lukasz-barszczewski.de/',
      technologies: '<img src="assets/img/js-no-txt.png" alt="JavaScript"> <img src="assets/img/html-no-txt.png" alt="HTML"> <img src="assets/img/css-no-txt.png" alt="CSS">'
    }
  ];

  activeProjectIndex = 0;

  selectProject(index: number) {
    this.activeProjectIndex = index;
  }
}
