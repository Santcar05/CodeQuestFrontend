import { Course } from '../models/Course';

export class PaginateCoursesUseCase {
  execute(courses: Course[], page: number, pageSize: number): Course[] {
    const start = (page - 1) * pageSize;
    return courses.slice(start, start + pageSize);
  }
}
