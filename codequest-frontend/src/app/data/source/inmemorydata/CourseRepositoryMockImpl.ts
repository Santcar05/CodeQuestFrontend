import { Course } from '../../../domain/models/Course';
import { CourseRepository } from '../../../domain/repositories/CourseRepository';
import { MOCK_DB } from '../../../seed/inMemoryData';

export class CourseRepositoryMockImpl implements CourseRepository {
  getCourses(): Course[] {
    return MOCK_DB.courses;
  }
  getCourseById(id: number): Course | null {
    return MOCK_DB.courses.find((course) => course.id === id) || null;
  }
}
