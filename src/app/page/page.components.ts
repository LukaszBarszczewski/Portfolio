import { Component } from '@angular/core';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { WhyMeSectionComponent } from '../components/why-me-section/why-me-section.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ReferencesComponent } from '../components/references/references.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { MySkillsComponent } from '../components/my-skills/my-skills.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'page',
  imports: [ 
    HeroSectionComponent,
    MenuBarComponent,
    WhyMeSectionComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactMeComponent,
    MySkillsComponent,
    FooterComponent],
  templateUrl: './page.component.html',
  styleUrl: '../app.component.scss'
})
export class PageComponent {
  title = 'portfolio';
}