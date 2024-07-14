import { NgIf } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Iresult {
  title: string;
  id: string;
}
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  results = signal<Iresult[]>([]);
  value = signal<string>('');

  products = [
    {
      title: 'shirt red',
      id: '668d2808d1956b34ce142442',
    },
    {
      title: 'shirt red',
      id: '668d2808d1956b34ce142442',
    },
    {
      title: 'shirt blck',
      id: '668d2808d1956b34ce142442',
    },
  ];
  handleInput(value: string) {
    if (!value && this.results().length) {
      this.results.set([]);
    }
  }

  handleSearch(e: any) {
    e.preventDefault();
    const search_value = this.value();
    if (!search_value) return;
    const result = this.products.filter((item) => {
      return item.title.includes(search_value);
    });
    this.results.set(result);
  }
}
