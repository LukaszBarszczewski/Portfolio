import { Component } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  imports: [TranslatePipe],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  constructor(public translate: TranslateService){}

  toggleLanguage() {
    this.translate.use( this.translate.currentLang === "en" ? "de" : "en");
  }
}
