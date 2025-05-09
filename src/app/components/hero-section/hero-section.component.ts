import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
    constructor(public translate: TranslateService) {
    const savedLang = localStorage.getItem('lang');
    const defaultLang = 'de';

    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(savedLang ?? defaultLang);
  }

  menuOpen = false;

  unwrapHamburgerMenu() {
    this.menuOpen = !this.menuOpen;
  }

   toggleLanguage() {
    const nextLang = this.translate.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(nextLang);
    localStorage.setItem('lang', nextLang);
  }

  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
