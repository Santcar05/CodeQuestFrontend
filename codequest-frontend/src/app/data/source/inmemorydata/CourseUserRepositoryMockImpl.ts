import { CourseUser } from '../../../domain/models/CourseUser';
import { MOCK_DB } from '../../../seed/inMemoryData';
import { CourseUserRepository } from '../../../domain/repositories/CourseUserRepository';

export class CourseUserRepositoryMockImpl implements CourseUserRepository {
  getCourseUsersByUserId(userId: number): CourseUser[] {
    return MOCK_DB.userCourses.filter((courseUser) => courseUser.userId === userId);
  }
  getByUserAndCourseId(userId: number, courseId: number): CourseUser | null {
    return (
      MOCK_DB.userCourses.find(
        (courseUser) => courseUser.userId === userId && courseUser.courseId === courseId
      ) || null
    );
  }
}
