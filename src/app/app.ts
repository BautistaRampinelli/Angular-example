import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-tutorial';
}
