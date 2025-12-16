import { CourseUser } from '../models/CourseUser';
import { CourseUserRepository } from '../repositories/CourseUserRepository';

export class GetCoursesUserByUserId {
  constructor(private courseUserRepository: CourseUserRepository) {}

  execute(userId: number): CourseUser[] {
    return this.courseUserRepository.getCourseUsersByUserId(userId);
  }
}
