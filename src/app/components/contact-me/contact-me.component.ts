import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  isDisabled: boolean = true;

  updateButtonState(event: Event) {
    this.isDisabled = !(event.target as HTMLInputElement).checked;
  }
}
