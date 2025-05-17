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
  @ViewChildren('pinRef') pins!: QueryList<ElementRef>;
  @ViewChildren('nameRef') names!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const options = { threshold: 0.1 };

    const animate = (el: ElementRef, className: string) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.nativeElement.classList.add(className);
        } else {
          el.nativeElement.classList.remove(className);
        }
      }, options);

      observer.observe(el.nativeElement);
    };

    this.buttons.forEach((btn) => animate(btn, 'visible-button'));
    this.pins.forEach((pin) => animate(pin, 'visible-pin'));
    this.names.forEach((name) => animate(name, 'visible-name'));
  }
}
