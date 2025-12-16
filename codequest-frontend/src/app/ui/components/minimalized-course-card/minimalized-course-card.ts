import { Component, Input } from '@angular/core';
import { ProgressBar } from '../../shared/progress-bar/progress-bar';

@Component({
  selector: 'app-minimalized-course-card',
  imports: [ProgressBar],
  templateUrl: './minimalized-course-card.html',
  styleUrl: './minimalized-course-card.css',
})
export class MinimalizedCourseCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() progress: number = 0;
  @Input() maxProgress: number = 100;
  @Input() icon: string = ''; // URL del icono o imagen para el curso
}
