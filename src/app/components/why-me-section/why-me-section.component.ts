import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me-section',
  imports: [TranslatePipe],
  templateUrl: './why-me-section.component.html',
  styleUrl: './why-me-section.component.scss'
})
export class WhyMeSectionComponent {
@ViewChildren('buttonRef') buttons!: QueryList<ElementRef>;

ngAfterViewInit(): void {
  this.buttons.forEach((btn) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        btn.nativeElement.classList.add('visible-button');
      } else {
          btn.nativeElement.classList.remove('visible-button');
        }
    }, { threshold: 0.1 });

    observer.observe(btn.nativeElement);
  });
}
}
