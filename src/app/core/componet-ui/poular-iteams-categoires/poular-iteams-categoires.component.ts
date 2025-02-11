import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, output, signal, WritableSignal } from '@angular/core';
import { FirstuppercasePipe } from '../../../shared/pipe/firstUpercase/firstuppercase.pipe';

@Component({
  selector: 'app-poular-iteams-categoires',
  imports: [NgClass,FirstuppercasePipe],
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
