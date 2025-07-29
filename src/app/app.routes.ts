import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'details-car/:carId',
    loadComponent: () => import('./shared/components/details-car/details-car').then(m => m.DetailsCar),
    title: 'Car Details'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact Us'
  },
];
