import { DashboardRepository } from '../../../domain/repositories/DashBoardRepository';
import { MOCK_DB } from '../../../seed/inMemoryData';
import { CourseUserRepository } from '../../../domain/repositories/CourseUserRepository';
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
    // Return a list of mock courses by User Id
    return MOCK_DB.courses;
  }
  getDailyQuests() {
    return MOCK_DB.dailyQuests;
  }
}
