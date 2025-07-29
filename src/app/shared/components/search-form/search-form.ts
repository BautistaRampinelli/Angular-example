import { Component } from '@angular/core';

@Component({
  selector: 'app-search-form',
  imports: [],
  templateUrl: './search-form.html',
  styleUrl: './search-form.scss'
})
export class SearchForm {
  filterResults(filterValue: string): void {
    console.log('Filtering results for:', filterValue);
  }
}
