import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  protected readonly openingHours = [
    { days: 'Monday – Friday', hours: '06:00 – 23:00' },
    { days: 'Saturday', hours: '08:00 – 22:00' },
    { days: 'Sunday', hours: '08:00 – 20:00' },
  ];

  protected readonly quickLinks = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Trainers', path: '/trainers' },
    { label: 'Contact', path: '/contact' },
  ];

  protected readonly contact = {
    address: '123 Fitness Street',
    phone: '+965 0000 0000',
    email: 'info@xtremefitness.com',
  };

  protected readonly socials = [
    { label: 'Facebook', icon: 'fa-facebook-f' },
    { label: 'Instagram', icon: 'fa-instagram' },
    { label: 'X', icon: 'fa-x-twitter' },
    { label: 'YouTube', icon: 'fa-youtube' },
  ];
}
