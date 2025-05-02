import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [TranslatePipe],
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
