import { Component, Input } from '@angular/core';
import { ProductData } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product: ProductData = {
    name: 'shirt',
    price: '1200.99',
    image: 'blue-back.png',
  };
}
