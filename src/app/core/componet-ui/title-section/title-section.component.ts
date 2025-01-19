import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  imports: [],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss'
})
export class TitleSectionComponent {
@Input() title: string = 'Poular Items'
}
