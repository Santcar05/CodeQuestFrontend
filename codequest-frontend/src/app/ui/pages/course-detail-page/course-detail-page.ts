import { Component, inject, signal } from '@angular/core';
import { GetCourseDetailUseCase } from '../../../domain/usecases/GetCourseDetailUseCase';
import { CourseRepositoryMockImpl } from '../../../data/source/inmemorydata/CourseRepositoryMockImpl';
import { CourseUserRepositoryMockImpl } from '../../../data/source/inmemorydata/CourseUserRepositoryMockImpl';
import { UserRepositoryMockImpl } from '../../../data/source/inmemorydata/UserRepositoryMockImpl';
import { CourseDetailDTO } from '../../../data/mappers/CourseDetailDTO';
import { CourseHeroComponent } from '../../components/course-hero/course-hero';
import { CourseLearningComponent } from '../../components/course-learning/course-learning';
import { CourseModulesComponent } from '../../components/course-modules/course-modules';
import { CourseRequirementsComponent } from '../../components/course-requirements/course-requirements';
import { CourseReviewsComponent } from '../../components/course-reviews/course-reviews';
import { CourseRelatedComponent } from '../../components/course-related/course-related';
import { CourseDetailUI } from '../../types/CourseDetailUI';
import { CourseRepository } from '../../../domain/repositories/CourseRepository';
import { CourseUserRepository } from '../../../domain/repositories/CourseUserRepository';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.html',
  imports: [
    CourseHeroComponent,
    CourseLearningComponent,
    CourseModulesComponent,
    CourseRequirementsComponent,
    CourseReviewsComponent,
    CourseRelatedComponent,
    CommonModule,
    FormsModule,
  ],
})
export class CourseDetailPage {
  // Repositorios (estos SÍ van en DI)
  private courseRepo = inject(CourseRepository);
  private courseUserRepo = inject(CourseUserRepository);
  private userRepo = inject(UserRepository);

  // Caso de uso (CREADO A MANO)
  private uc = new GetCourseDetailUseCase(this.courseRepo, this.courseUserRepo, this.userRepo);
  data = signal<CourseDetailDTO | null>(null);
  isLoading = signal(true);
  hasError = signal(false);

  constructor(private router: Router) {}

  ngOnInit() {
    //Recibir el id de la URL
    const id = Number(this.router.url.split('/').pop());
    try {
      this.data.set(this.uc.execute(id, 1));
    } catch {
      this.hasError.set(true);
    } finally {
      this.isLoading.set(false);
    }
  }
}
