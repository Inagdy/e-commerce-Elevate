
import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-ui',
  imports: [NgStyle],
  templateUrl: './circle-ui.component.html',
  styleUrl: './circle-ui.component.scss'
})
export class CircleUiComponent {
  @Input() size: 's' | 'm' | 's_m'| 'lg' = 's'; // Default size
  @Input() color:'primary'|'basket'  = 'primary'; 

  sizeMap = {
    s: '--main-s-circle',
    m: '--main-m-circle',
    s_m: '--main-s-m-circle',
    lg: '--main-lg-circle'
  };
  colorMap = {
    primary: '--main-color',
    basket: '--main-color-basket'
  }

  get circleStyles() {
    return {
      'width': `var(${this.sizeMap[this.size]})`,
      'height': `var(${this.sizeMap[this.size]})`,
      'background-color':`var(${this.colorMap[this.color]})`
    };
  }
  
}
