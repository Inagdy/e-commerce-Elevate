import { NgStyle } from '@angular/common';
import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { IButton } from '../../../../core/interfaces/button';
@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  onClick:OutputEmitterRef<void> = output<void>();
  buttonInfo = input.required<IButton>()
  onButtonClick()
  {
    this.onClick.emit();
  }
}
