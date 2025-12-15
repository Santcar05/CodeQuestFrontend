import { DashboardRepository } from '../../../domain/repositories/DashBoardRepository';

export class DashboardRepositoryMock implements DashboardRepository {
  getStats() {
    return {
      level: 15,
      streak: 20,
      currentXP: 500,
      maxXP: 2000,
    };
  }

  getCourses() {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Course ${i + 1}`,
    }));
  }
}
