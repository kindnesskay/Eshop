import { Component, effect, inject } from '@angular/core';
import { Iproduct } from '../../../interfaces/product.interface';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ManageDataService } from '../../services/manage-data.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  productsArray: Iproduct[] | null = null;
  private manageDataService = inject(ManageDataService);
  constructor() {
    effect(() => {
      this.productsArray = this.manageDataService.products();
    });
  }
}
