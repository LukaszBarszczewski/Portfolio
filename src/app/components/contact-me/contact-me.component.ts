import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  isDisabled: boolean = true;

  updateButtonState() {
    const checkbox = (document.getElementById('privacy') as HTMLInputElement)?.checked;
    const { name, email, message } = this.contactData;
    this.isDisabled = !(checkbox && name && email && message);
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
    
  }
}
