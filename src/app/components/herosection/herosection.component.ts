import { Component } from '@angular/core';
import { ActionCardComponent } from '../action-card/action-card.component';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [ActionCardComponent],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css',
})
export class HerosectionComponent {
  action_card_data = [
    {
      title: 'Easy to use',
      text: 'Easy to use for everyone and simple',
    },
    {
      title: 'Real Time',
      text: 'Get merch from stores in real time',
    },

    {
      title: 'Safety & Privacy',
      text: 'Safe and secure data encryption',
    },
  ];
}
