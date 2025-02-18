import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() details: string[] = [];
  @Input() image: string = '';
  @Input() link: string = '#';
}