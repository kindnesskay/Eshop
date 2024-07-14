import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../../interfaces/product.interface';
import { NgIf } from '@angular/common';
import { ManageDataService } from '../../services/manage-data.service';
import { CartService } from '../../services/cart.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private route = inject(ActivatedRoute);
  private manageDataService = inject(ManageDataService);
  private id: string | null = null;
  product: Iproduct | null = null;
  quantity = signal<number>(0);
  cartService = inject(CartService);

  handleIncrease() {
    if (this.quantity() >= 99) return;
    this.quantity.set(this.quantity() + 1);
  }
  handleDecrease() {
    if (this.quantity() <= 0) return;
    this.quantity.set(this.quantity() - 1);
  }
  handleAddToCart() {
    if (!this.product) return;
    this.cartService.add(this.product);
  }
  constructor() {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    effect(() => {
      if (this.id) {
        if (environment.production) {
          this.product = this.manageDataService.getOne(this.id);
        }

        this.manageDataService.fetchOne(this.id).subscribe({
          next: (res) => {
            this.product = res;
          },
        });
      }
    });
  }
}
