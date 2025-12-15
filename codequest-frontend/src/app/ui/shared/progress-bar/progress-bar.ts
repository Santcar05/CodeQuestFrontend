import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [CommonModule],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
  @Input() value = 0;
  @Input() max = 100;

  @Input() height = 10; // px
  @Input() radius = 999;

  @Input() colorFrom = '#ff7a00';
  @Input() colorTo = '#ff9a3d';
  @Input() background = '#2a2a2a';

  @Input() animated = true;

  get percentage(): number {
    if (this.max <= 0) return 0;
    return Math.min(100, (this.value / this.max) * 100);
  }
}
