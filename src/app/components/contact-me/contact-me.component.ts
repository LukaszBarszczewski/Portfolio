import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  isChecked = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  get checkboxImage() {
    return this.isChecked 
      ? 'assets/img/checkbox-checked.png' 
      : 'assets/img/checkbox-unchecked.png';
  }
}
