import { Car } from './../../models/car';
import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car/car';
import { SimpleList } from '../../shared/components';

@Component({
  selector: 'app-home',
  imports: [SimpleList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected title = 'Home Page';
  protected description = 'Welcome to the Angular Sample App. Use the search form to find models.';
  carList: Car[] = [];
  carListFiltered: Car[] = [];

  carService: CarService = inject(CarService);
  constructor() {
    this.carList = this.carService.getAllCars();
    this.carListFiltered = this.carList;
  }

  filterResults(filterValue: string): void {
    console.log('Filtering results for:', filterValue);

    if (!filterValue) {
      this.carListFiltered = this.carList;
      return;
    }
    this.carListFiltered = this.carList.filter(car => car.model.toLowerCase().includes(filterValue.toLowerCase()) || car.brand.toLowerCase().includes(filterValue.toLowerCase()));
  }

  updateSearch(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement;
      this.filterResults(inputElement.value);
    }
  }

}
