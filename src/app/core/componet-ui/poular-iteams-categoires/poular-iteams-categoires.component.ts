import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, output, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-poular-iteams-categoires',
  imports: [NgClass],
  templateUrl: './poular-iteams-categoires.component.html',
  styleUrl: './poular-iteams-categoires.component.scss'
})
export class PoularIteamsCategoiresComponent {

  activeIndex: WritableSignal<number> = signal(0);




  @Input() catgorys!:any
  @Output()   keyword:EventEmitter<string>=new EventEmitter<string>()


setactve(index:number){
this.activeIndex.set(index)
}


getkeword(name:string){
this.keyword.emit(name)
}


}
