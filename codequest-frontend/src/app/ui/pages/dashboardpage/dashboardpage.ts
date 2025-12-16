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
import { CourseUserRepository } from '../../../domain/repositories/CourseUserRepository';
import { GetCoursesByUserIdUseCase } from '../../../domain/usecases/GetCoursesByUserIdUseCase';
import { CourseRepository } from '../../../domain/repositories/CourseRepository';
import { GetCoursesUserByUserId } from '../../../domain/usecases/GetCoursesUserByUserId';
import { GetDashBoardDailyQuestsUseCase } from '../../../domain/usecases/GetDashBoardDailyQuestsUseCase';

// Interface for Course On componente
export interface PaginateUC {
  id: number;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  icon: string;
}

//
@Component({
  selector: 'app-dashboardpage',
  imports: [RecommendedChallenge, MinimalizedCourseCard, ProgressBar, CommonModule, DailyQuestCard],
  templateUrl: './dashboardpage.html',
  styleUrls: ['./dashboardpage.css'],
})
export class Dashboardpage {
  private repo = inject(DashboardRepository);

  private getStatsUC = new GetDashboardStatsUseCase(this.repo);
  private paginateUC = new PaginateCoursesUseCase();
  private getCoursesUserByUserUC = new GetCoursesUserByUserId(inject(CourseUserRepository));
  private getCoursesByUserUC = new GetCoursesByUserIdUseCase(
    inject(CourseUserRepository),
    inject(CourseRepository)
  );
  private getDailyQuestsUC = new GetDashBoardDailyQuestsUseCase(this.repo);

  dailyQuests = signal(this.getDailyQuestsUC.execute())();

  page = signal(1);
  pageSize = 4;
  totalPages = computed(() => Math.ceil(this.courses().length / this.pageSize));

  stats = signal(this.getStatsUC.execute());
  //Obtained all courses for the user
  courses = signal(this.getCoursesByUserUC.execute(1));
  //
  coursesUser = signal(this.getCoursesUserByUserUC.execute(1));

  // Convert to PaginateUC interface courses(attributes: id, title, description, icon) and CoursesUser(progress)
  coursesMixed = computed<PaginateUC[]>(() => {
    return this.courses().map((course) => {
      const courseUser = this.coursesUser().find((cu) => cu.id === course.id);
      return {
        id: course.id,
        title: course.title,
        description: course.description,
        progress: courseUser ? courseUser.progress : 0,
        maxProgress: 100,
        icon: 'badge.png',
      };
    });
  });

  paginatedCourses = computed(() =>
    this.paginateUC.execute(this.coursesMixed(), this.page(), this.pageSize)
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
