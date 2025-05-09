import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  isDisabled: boolean = true;

  navigateToPrivacyPolicy() {
    this.router.navigateByUrl('/privacy').then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });;
  }

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
          complete: () => {
            console.info('send post complete');
            this.router.navigateByUrl('/confirmation');
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
