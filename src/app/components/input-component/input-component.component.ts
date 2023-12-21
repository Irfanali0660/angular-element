import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type InputValue=string | number | undefined
type InputType='text' | 'number' | 'email'

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css'
})
export class InputComponentComponent {
    @Input() InputId=Math.random().toString(16);
    @Input() label=''
    @Input() value:InputValue='';
    @Input() type:InputType='text';
}
