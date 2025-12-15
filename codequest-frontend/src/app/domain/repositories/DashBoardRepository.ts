import { DashboardStats } from '../models/ui/DashBoardStats';
import { Course } from '../models/Course';

export abstract class DashboardRepository {
  abstract getStats(): DashboardStats;
  abstract getCourses(): Course[];
}
