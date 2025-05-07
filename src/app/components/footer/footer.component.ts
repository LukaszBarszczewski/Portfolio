import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router:Router, private viewportScroller: ViewportScroller) {}
  navigateToLegal() {
    this.router.navigateByUrl('/legal').then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });;
  }
}
