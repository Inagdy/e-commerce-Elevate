import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { CircleUiComponent } from "../../../../core/componet-ui/circle-ui/circle-ui.component";

@Component({
  selector: 'app-layerimagespoularitems',
  imports: [CircleUiComponent],
  templateUrl: './layerimagespoularitems.component.html',
  styleUrl: './layerimagespoularitems.component.scss',
})
export class LayerimagespoularitemsComponent {
  @Input() images: string[] = [];

  @Output() showEventEmitter = new EventEmitter<boolean>();
  Show: WritableSignal<boolean> = signal(false);

  currentIndex: WritableSignal<number> = signal(0);

  showNextImage() {
    if (this.currentIndex() < this.images.length - 1) {
      this.currentIndex.set(this.currentIndex() + 1);
    }
  }

  showPrevImage() {
    if (this.currentIndex() > 0) {
      this.currentIndex.set(this.currentIndex() - 1);
    }
  }


  showhidden(){
    this.showEventEmitter.emit(false);
  }


}
