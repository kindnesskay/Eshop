import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  display = false;
  menu_open_icon = '/assets/menu.svg';
  menu_close_icon = '/assets/close.svg';

  handleMenuClick() {
    this.display = !this.display;
    // change menu image on click
  }
  openMenu() {
    this.display = true;
  }
  closeMenu() {
    this.display = false;
  }
}
