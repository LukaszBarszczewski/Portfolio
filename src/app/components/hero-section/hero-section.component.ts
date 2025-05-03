import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  constructor(public translate: TranslateService){}

  menuOpen = false;

  unwrapHamburgerMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleLanguage() {
    this.translate.use( this.translate.currentLang === "en" ? "de" : "en");
  }
}
