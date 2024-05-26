import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HerosectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eshop';
}
