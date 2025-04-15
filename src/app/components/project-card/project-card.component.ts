import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() abouts: string = '';
  @Input() organization: string = '';
  @Input() groupwork: string = '';
  @Input() image: string = '';
  @Input() link: string = '#';
  @Input() technologies: string = '';
  
  openLink() {
    window.open(this.link);
  }
}