import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  currency = signal('$');
  constructor() {}
}
