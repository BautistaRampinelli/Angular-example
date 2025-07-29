import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header';
import { RouterModule } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-tutorial';
}
