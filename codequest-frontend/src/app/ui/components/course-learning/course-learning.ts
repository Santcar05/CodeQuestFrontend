import { Component, Input } from '@angular/core';
import { Course } from '../../../domain/models/Course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-learning',
  templateUrl: './course-learning.html',
  styleUrls: ['./course-learning.css'],
  imports: [CommonModule],
})
export class CourseLearningComponent {
  @Input() description: string = '';
  @Input() level: string = '';
  @Input() category: string = '';

  get learningPoints(): string[] {
    if (this.category === 'Frontend') {
      return ['Componentes', 'Arquitectura limpia', 'Buenas prácticas'];
    }
    return ['Fundamentos del curso'];
  }
}
