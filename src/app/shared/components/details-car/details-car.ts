import { CarService } from './../../../services/car/car';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-details-car',
  imports: [],
  templateUrl: './details-car.html',
  styleUrl: './details-car.scss'
})
export class DetailsCar {
  route: ActivatedRoute = inject(ActivatedRoute);
  carService: CarService = inject(CarService);
  car: Car | undefined;

  constructor() {
    const carId = String(this.route.snapshot.params['carId']);
    this.car = this.carService.getCarById(carId);
  }
}
