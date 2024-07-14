import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from '../../cart/cart.component';
import { CartService } from '../../../services/cart.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-shop-layout',
  standalone: true,
  imports: [RouterOutlet, NgClass, CartComponent, FooterComponent],
  templateUrl: './shop-layout.component.html',
  styleUrl: './shop-layout.component.css',
})
export class ShopLayoutComponent {
  cartService = inject(CartService);
}
