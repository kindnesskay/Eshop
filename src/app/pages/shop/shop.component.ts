import { Component } from '@angular/core';
import { ProductData } from '../../../interfaces/product.interface';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  productsArray: ProductData[] = [
    { name: 'short', price: '1200.99', image: '/assets/blue-back.png' },
    { name: 'shirt', price: '1200.99', image: '/assets/blue-back.png' },
    { name: 'shirt-blac', price: '100.99', image: '/assets/blue-back.png' },
    {
      name: 'shirt and back',
      price: '1200.99',
      image: '/assets/blue-front.png',
    },
    { name: 'shirt', price: '120.99', image: '/assets/blue-back.png' },
    { name: 'shoe', price: '1200.99', image: '/assets/blue-back.png' },
    { name: 'shirt', price: '1200.99', image: '/assets/blue-back.png' },
    { name: 'shirt', price: '12700.99', image: '/assets/blue-front.png' },
    { name: 'shirt-red', price: '1200.99', image: '/assets/blue-back.png' },
  ];
}
