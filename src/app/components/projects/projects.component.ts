import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    
    this.translateProjects();

    this.translate.onLangChange.subscribe(() => {
      this.translateProjects();
    });
      
  }
  translatedProjects: any[] = [];
  projects = [
    {
      title: 'Join',
      abouts: 'projects.first.abouts', 
      organization: 'projects.first.organization', 
      groupwork: 'projects.first.groupwork', 
      image: 'assets/img/join.png',
      link: 'https://github.com/johannesngl/join',
      live: 'http://join.lukasz-barszczewski.de/',
      technologies: '<img src="assets/img/js-no-txt.png" alt="JavaScript"> <img src="assets/img/html-no-txt.png" alt="HTML"> <img src="assets/img/css-no-txt.png" alt="CSS"> <img src="assets/img/firebase-no-txt.png" alt="Firebase">'
    },
    {
      title: 'World of World.class',
      abouts: 'projects.second.abouts',
      organization: 'projects.second.organization',
      groupwork: 'projects.second.groupwork',
      image: 'assets/img/wowc.png',
      link: 'https://github.com/LukaszBarszczewski/World-of-World.class',
      live: 'http://world-of-world.class.lukasz-barszczewski.de/',
      technologies: '<img src="assets/img/js-no-txt.png" alt="JavaScript"> <img src="assets/img/html-no-txt.png" alt="HTML"> <img src="assets/img/css-no-txt.png" alt="CSS">'
    },
    {
      title: 'Pokedex',
      abouts: 'projects.third.abouts',
      organization: 'projects.third.organization',
      groupwork: 'projects.third.groupwork',
      image: 'assets/img/pokedex.png',
      link: 'https://github.com/LukaszBarszczewski/Pokedex',
      live: 'http://pokedex.lukasz-barszczewski.de/',
      technologies: '<img src="assets/img/js-no-txt.png" alt="JavaScript"> <img src="assets/img/html-no-txt.png" alt="HTML"> <img src="assets/img/css-no-txt.png" alt="CSS">'
    }
  ];

  translateProjects() {
    this.translatedProjects = this.projects.map(project => ({
      ...project, 
      abouts: this.translate.instant(project.abouts), 
      organization: this.translate.instant(project.organization),
      groupwork: this.translate.instant(project.groupwork)
    }));
  }

  activeProjectIndex = 0;

  selectProject(index: number) {
    this.activeProjectIndex = index;
  }
}
