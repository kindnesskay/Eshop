import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Iproduct } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManageDataService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  products = signal<Iproduct[] | null>(null);
  cartItems = signal([]);

  constructor() {}
  fetchAll(): Observable<Iproduct[]> {
    if (environment.production) {
      return this.http.get<Iproduct[]>(`/assets/data.json`);
    }
    return this.http.get<Iproduct[]>(`${this.apiUrl}/products/`, {
      withCredentials: true,
    });
  }
  fetchOne(id: string): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.apiUrl}/products/${id}`, {
      withCredentials: true,
    });
  }
  getOne(id: string) {
    const promise = this.products()!.filter((item) => {
      return item._id == id;
    })[0] as Iproduct;
    return promise;
  }
}
