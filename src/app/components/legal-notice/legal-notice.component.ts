import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [],
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
