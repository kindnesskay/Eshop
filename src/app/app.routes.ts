import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { ShopLayoutComponent } from './components/layout/shop-layout/shop-layout.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ShopLayoutComponent,
    children: [
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'shop/:id',
        component: ProductComponent,
      },
    ],
  },
];
