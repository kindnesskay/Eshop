import { Component, inject, Input, signal } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Iproduct } from '../../../interfaces/product.interface';
import { NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() product!: Iproduct;
  utilityService = inject(UtilsService);
  cartService = inject(CartService);
  quantity = signal<number>(0);
  handleIncrease() {
    if (this.quantity() >= 99) return;
    this.quantity.set(this.quantity() + 1);
  }
  handleDecrease() {
    if (this.quantity() <= 0) return;
    this.quantity.set(this.quantity() - 1);
  }

  handleRemove() {
    this.cartService.remove(this.product._id);
  }
}
