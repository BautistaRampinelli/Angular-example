import { Component, input } from '@angular/core';
import { CarCard } from '../car-card/car-card';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-simple-list',
  imports: [CarCard],
  templateUrl: './simple-list.html',
  styleUrl: './simple-list.scss'
})
export class SimpleList {
  carList = input.required<Car[]>();
}
