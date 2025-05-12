import { Component, ElementRef, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements AfterViewInit {
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