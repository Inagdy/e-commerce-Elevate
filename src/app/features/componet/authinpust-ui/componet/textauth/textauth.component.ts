import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textauth',
  imports: [],
  templateUrl: './textauth.component.html',
  styleUrl: './textauth.component.scss'
})
export class TextauthComponent {
@Input() Text!:string
}
