import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  imports: [FormsModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() disabled = false;
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';
}
