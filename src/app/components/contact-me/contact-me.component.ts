import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  post = {
    endPoint: 'http://lukasz-barszczewski.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
    }
  }
}
