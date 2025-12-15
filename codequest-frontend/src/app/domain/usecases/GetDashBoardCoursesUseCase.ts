import { DashboardRepository } from '../repositories/DashBoardRepository';

export class GetDashboardCoursesUseCase {
  constructor(private repo: DashboardRepository) {}

  execute() {
    return this.repo.getCourses();
  }
}
