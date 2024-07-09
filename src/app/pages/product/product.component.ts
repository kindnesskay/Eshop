import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../../interfaces/product.interface';
import { NgIf } from '@angular/common';
import { ManageDataService } from '../../services/manage-data.service';

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
  product: Iproduct | null = null;
  private id: string | null = null;
  constructor() {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    effect(() => {
      if (this.id) {
        this.product = this.manageDataService.fetchOne(this.id);
      }
    });
  }
}
