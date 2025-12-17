import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-related',
  templateUrl: './course-related.html',
  styleUrls: ['./course-related.css'],
  imports: [CommonModule],
})
export class CourseRelatedComponent {
  @Input() category: string = '';
  @Input() title: string = '';
  related = [{ title: 'Curso relacionado 1' }, { title: 'Curso relacionado 2' }];
}
