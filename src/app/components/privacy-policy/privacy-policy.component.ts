import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslatePipe, CommonModule, MenuBarComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private router:Router, private viewportScroller: ViewportScroller){}

  navigateBack() {
    this.router.navigateByUrl('').then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });;
  }
}
