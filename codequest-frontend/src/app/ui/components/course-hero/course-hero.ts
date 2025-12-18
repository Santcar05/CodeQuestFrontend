import { Component, Input } from '@angular/core';
import { Course } from '../../../domain/models/Course';
import { User } from '../../../domain/models/User';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-hero',
  templateUrl: './course-hero.html',
  styleUrls: ['./course-hero.css'],
  imports: [CommonModule],
})
export class CourseHeroComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() level: string = '';
  @Input() instructorName: string = '';
  @Input() instructorAvatar: string = '';
  @Input() progress: number = 0;
  @Input() xp: number = 0;
  @Input() totalPoints: number = 0;
  @Input() category: string = '';

  constructor(private router: Router) {}

  enroll() {
    console.log('Enroll button clicked!');
    this.router.navigate(['/learning-course/']);

    // Aquí puedes agregar la lógica para inscribir al usuario en el curso
  }
}
