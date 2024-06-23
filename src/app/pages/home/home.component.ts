import { Component } from '@angular/core';
import { HerosectionComponent } from '../../components/herosection/herosection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HerosectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
