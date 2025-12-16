import { PaginateUC } from '../../ui/pages/dashboardpage/dashboardpage';
import { Course } from '../models/Course';

export class PaginateCoursesUseCase {
  execute(courses: PaginateUC[], page: number, pageSize: number): PaginateUC[] {
    const start = (page - 1) * pageSize;
    return courses.slice(start, start + pageSize);
  }
}
