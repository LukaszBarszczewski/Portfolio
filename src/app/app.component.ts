import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { WhyMeSectionComponent } from './components/why-me-section/why-me-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, MenuBarComponent, WhyMeSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
