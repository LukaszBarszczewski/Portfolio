import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
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
  constructor(private router:Router, private viewportScroller: ViewportScroller){}

  navigateBack() {
    this.router.navigateByUrl('').then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });;
  }

  navigateToPrivacy() {
    this.router.navigateByUrl('/privacy').then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });;
  }

}
