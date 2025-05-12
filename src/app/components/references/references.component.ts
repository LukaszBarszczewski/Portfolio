import { Component, ElementRef, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements AfterViewInit {
  @ViewChildren('ref') referenceElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.referenceElements.forEach((ref) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          ref.nativeElement.classList.add('visible');
        } else {
          ref.nativeElement.classList.remove('visible');
        }
      }, { threshold: 0.2 });

      observer.observe(ref.nativeElement);
    });
  }
}
