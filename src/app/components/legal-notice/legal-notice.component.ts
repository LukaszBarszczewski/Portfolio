import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  imports: [TranslatePipe, MenuBarComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private router:Router){}

  navigateBack() {
    this.router.navigateByUrl('');
  }

  navigateToPrivacy() {
    this.router.navigateByUrl('/privacy');
  }

}
