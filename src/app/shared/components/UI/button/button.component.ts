import { NgStyle } from '@angular/common';
import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  buttonName:InputSignal<string> = input.required<string>();
  showIcon:InputSignal<boolean> = input<boolean>(false);
  onClick:OutputEmitterRef<void> = output<void>();
  color:InputSignal<string> = input<string>("#ffffff");
  borderColor:InputSignal<string> = input<string>('');
  borderRadius:InputSignal<number> = input<number>(10);
  background:InputSignal<string> = input.required<string>();
  disabled:InputSignal<boolean> = input<boolean>(false);
  onButtonClick()
  {
    this.onClick.emit();
  }
}
