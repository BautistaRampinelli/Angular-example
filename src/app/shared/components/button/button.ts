import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `<button class="btn" (onclick)="parentMethod()">{{label()}}</button>`,
  styleUrl: './button.scss'
})
export class Button {
  label = input.required<string>();
  parentMethod = input.required<() => void>();
}
