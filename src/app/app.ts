import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-tutorial';
}
