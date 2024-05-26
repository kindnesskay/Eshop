import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [],
  templateUrl: './action-card.component.html',
  styleUrl: './action-card.component.css',
})
export class ActionCardComponent {
  @Input() title!: string;
  @Input() text!: string;
}
