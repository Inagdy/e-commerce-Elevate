import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poular-iteams-categoires',
  imports: [NgClass],
  templateUrl: './poular-iteams-categoires.component.html',
  styleUrl: './poular-iteams-categoires.component.scss'
})
export class PoularIteamsCategoiresComponent {

  activeIndex: number = 0;


  categoires:string[] = ['Home & Living','Garment Care','Gifts Box','Occasion Gifts']

  @Input() catgorys!:any
  
setactve(index:number){
this.activeIndex=index
}
}
