import { Component, inject, Input } from '@angular/core';
import { Iproduct } from '../../../interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Iproduct;
  cartService = inject(CartService);
  handleAddToCart() {
    if (!this.product) return;
    this.cartService.add(this.product);
  }
}
