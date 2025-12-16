import { DashboardRepository } from '../repositories/DashBoardRepository';

export class GetDashBoardDailyQuestsUseCase {
  constructor(private repo: DashboardRepository) {}

  execute() {
    return this.repo.getDailyQuests();
  }
}
