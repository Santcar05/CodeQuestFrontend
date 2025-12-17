import { Component, Input } from '@angular/core';
import { Course } from '../../../domain/models/Course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-reviews',
  templateUrl: './course-reviews.html',
  styleUrls: ['./course-reviews.css'],
  imports: [CommonModule],
})
export class CourseReviewsComponent {
  @Input() courseId: number = 0;
  reviews = [
    { user: 'Ana', rating: 5, comment: 'Excelente curso' },
    { user: 'Luis', rating: 4, comment: 'Muy claro' },
  ];
}
