import { Injectable } from '@angular/core';
import { Car } from '../../models/car';
import { cars } from '../../data/cars/list-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carList: Car[] = cars;

  getAllCars(): Car[] {
    return this.carList;
  }

  getCarById(id: string): Car | undefined {
    return this.carList.find(car => car.id === id);
  }
}
