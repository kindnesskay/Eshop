import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Iproduct } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageDataService {
  private http = inject(HttpClient);
  products = signal<Iproduct[] | null>(null);
  constructor() {}
  fetchAll(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('/assets/data.json');
  }
  fetchOne(id: string): Iproduct | null {
    const data: Iproduct[] | null = this.products();
    if (!data) return null;
    data.filter((item) => {
      return item.id == id;
    });
    if (data) return data[0];
    return null;
  }
}
