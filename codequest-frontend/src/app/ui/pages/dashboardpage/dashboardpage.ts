import { Component, inject, signal, computed } from '@angular/core';
import { DashboardRepository } from '../../../domain/repositories/DashBoardRepository';
import { GetDashboardStatsUseCase } from '../../../domain/usecases/GetDashBoardStatsUseCase';
import { GetDashboardCoursesUseCase } from '../../../domain/usecases/GetDashBoardCoursesUseCase';
import { PaginateCoursesUseCase } from '../../../domain/usecases/PaginateCoursesUseCase';

// UI Components
import { RecommendedChallenge } from '../../components/recommended-challenge/recommended-challenge';
import { MinimalizedCourseCard } from '../../components/minimalized-course-card/minimalized-course-card';
import { ProgressBar } from '../../shared/progress-bar/progress-bar';
import { CommonModule } from '@angular/common';
import { DailyQuestCard } from '../../components/daily-quest-card/daily-quest-card';

@Component({
  selector: 'app-dashboardpage',
  imports: [RecommendedChallenge, MinimalizedCourseCard, ProgressBar, CommonModule, DailyQuestCard],
  templateUrl: './dashboardpage.html',
  styleUrl: './dashboardpage.css',
})
export class Dashboardpage {
  private repo = inject(DashboardRepository);

  private getStatsUC = new GetDashboardStatsUseCase(this.repo);
  private getCoursesUC = new GetDashboardCoursesUseCase(this.repo);
  private paginateUC = new PaginateCoursesUseCase();

  page = signal(1);
  pageSize = 4;

  stats = signal(this.getStatsUC.execute());
  courses = signal(this.getCoursesUC.execute());

  totalPages = computed(() => Math.ceil(this.courses().length / this.pageSize));

  paginatedCourses = computed(() =>
    this.paginateUC.execute(this.courses(), this.page(), this.pageSize)
  );

  nextPage() {
    if (this.page() < this.totalPages()) {
      this.page.update((v) => v + 1);
    }
  }

  prevPage() {
    if (this.page() > 1) {
      this.page.update((v) => v - 1);
    }
  }
}
