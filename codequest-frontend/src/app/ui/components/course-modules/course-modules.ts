import { Component, Input } from '@angular/core';
import { Course } from '../../../domain/models/Course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-modules',
  templateUrl: './course-modules.html',
  styleUrls: ['./course-modules.css'],
  imports: [CommonModule],
})
export class CourseModulesComponent {
  @Input() courseId: number = 0;
  get modules() {
    return [
      { title: 'Introducción', duration: '30 min' },
      { title: 'Conceptos clave', duration: '1h' },
    ];
  }
}
