import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact/contact';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactService: ContactService = inject(ContactService);

  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    carId: new FormControl('')
  });

  submitContactForm(): void {
    this.contactService.submitContactForm(
      this.applyForm.value.name || '',
      this.applyForm.value.email || '',
      this.applyForm.value.message || '',
      this.applyForm.value.carId || ''
    );
    this.applyForm.reset();}
}
