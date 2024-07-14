import { Injectable, signal } from '@angular/core';
import { Iproduct } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartTotal = signal<number>(0);
  cartItems: Iproduct[] = [];
  cartPannel = signal<boolean>(false);
  constructor() {}

  add(item: Iproduct) {
    this.cartItems.push(item);
    this.cartTotal.set(this.cartTotal() + 1);
  }
  remove(id: string) {
    const dubArr = this.cartItems.filter((item) => {
      return item._id != id;
    });
    this.cartItems = dubArr;
    this.cartTotal.set(this.cartTotal() - 1);
  }
}
