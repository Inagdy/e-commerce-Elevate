import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-poular-iteams-categoires',
  imports: [NgClass],
  templateUrl: './poular-iteams-categoires.component.html',
  styleUrl: './poular-iteams-categoires.component.scss'
})
export class PoularIteamsCategoiresComponent {

  activeIndex: number = 0;




  @Input() catgorys!:any
  @Output()   keyword:EventEmitter<string>=new EventEmitter<string>()


setactve(index:number){
this.activeIndex=index
}


getkeword(name:string){
this.keyword.emit(name)
}


}
