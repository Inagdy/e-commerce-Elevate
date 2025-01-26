import { Component } from '@angular/core';
import { SpecialGiftsComponent } from '../../../shared/components/UI/special-gifts/special-gifts.component';
@Component({
  selector: 'app-home',
  imports: [SpecialGiftsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(){}
}
