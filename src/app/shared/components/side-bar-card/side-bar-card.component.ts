import { isNgTemplate } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-card',
  imports: [ ],
  templateUrl: './side-bar-card.component.html',
  styleUrl: './side-bar-card.component.scss'
})
export class SideBarCardComponent {
 
@Input() title!: string;  


}
