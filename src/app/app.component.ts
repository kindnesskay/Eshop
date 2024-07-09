import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManageDataService } from './services/manage-data.service';
import { Iproduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eshop';
  private manageDataService = inject(ManageDataService);
  constructor() {
    this.manageDataService.fetchAll().subscribe({
      next: (res) => {
        const jsonArr = Object.values(res);
        this.manageDataService.products.set(jsonArr);
      },
      error: (err) => {
        this.manageDataService.products.set(null);
        console.error(err);
      },
    });
  }
}
