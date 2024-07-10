import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Iproduct } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

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
    return this.http.get<Iproduct[]>(`${this.apiUrl}/products/`, {
      withCredentials: true,
    });
  }
  fetchOne(id: string): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.apiUrl}/products/${id}`, {
      withCredentials: true,
    });
  }
}
