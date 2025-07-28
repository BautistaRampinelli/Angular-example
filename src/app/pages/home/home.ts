import { Component, inject } from '@angular/core';
import { SearchForm } from '../../shared/components/search-form/search-form';
import { Car } from '../../models/car';
import { SimpleList } from '../../shared/components/simple-list/simple-list';
import { CarService } from '../../services/car/car';

@Component({
  selector: 'app-home',
  imports: [SearchForm, SimpleList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected title = 'Home Page';
  protected description = 'Welcome to the Angular Sample App. Use the search form to find models.';
  carList: Car[] = [];

  carService: CarService = inject(CarService);
  constructor() {
    this.carList = this.carService.getAllCars();
  }
}
