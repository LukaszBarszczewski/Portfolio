import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation',
  imports: [TranslatePipe],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  countdown: number = 5;

  navigateBack(): void {
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    let timer = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(timer);
        this.navigateBack();
      }
    }, 1000);
  }

}
