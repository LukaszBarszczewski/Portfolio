import { Component } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  imports: [TranslatePipe],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  constructor(public translate: TranslateService) {
    const savedLang = localStorage.getItem('lang');
    const defaultLang = 'de';

    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(savedLang ?? defaultLang);
  }

  toggleLanguage() {
    const nextLang = this.translate.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(nextLang);
    localStorage.setItem('lang', nextLang);
  }
}
