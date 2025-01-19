import { Component, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SpecialGiftsComponent } from '../../../shared/components/UI/special-gifts/special-gifts.component';
@Component({
  selector: 'app-home',
  imports: [SpecialGiftsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  $endSubs$:Subject<any> = new Subject();
  constructor(){}
  ngOnInit()
  {
    
  }
  ngOnDestory()
  {
    
  }
}
