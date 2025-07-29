import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  submitContactForm(name: string, email: string, message: string, carId: string): void {
    // Logic to handle form submission, e.g., sending data to a server
    console.log('Contact form submitted:', { name, email, message, carId });
  }

}
