import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  areAllRequired(): boolean {
     return (
      this.contactForm.name !== '' &&
      this.contactForm.email !== '' &&
      this.contactForm.subject !== '' &&
      this.contactForm.message !== ''
      )
    }
  }
  