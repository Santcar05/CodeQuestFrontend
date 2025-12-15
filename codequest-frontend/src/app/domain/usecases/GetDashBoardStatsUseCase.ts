import { DashboardRepository } from '../repositories/DashBoardRepository';
export class GetDashboardStatsUseCase {
  constructor(private repo: DashboardRepository) {}

  execute() {
    return this.repo.getStats();
  }
}
