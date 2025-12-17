import { Component, Input } from '@angular/core';
import { Course } from '../../../domain/models/Course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-requirements',
  templateUrl: './course-requirements.html',
  styleUrls: ['./course-requirements.css'],
  imports: [CommonModule],
})
export class CourseRequirementsComponent {
  @Input() level: string = '';
  get requirements(): string[] {
    return this.level === 'Advanced' ? ['Experiencia previa'] : ['Ganas de aprender'];
  }
}
