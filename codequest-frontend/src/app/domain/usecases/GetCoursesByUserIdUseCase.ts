import { CourseUserRepository } from '../repositories/CourseUserRepository';
import { CourseRepository } from '../repositories/CourseRepository';
import { Course } from '../models/Course';

export class GetCoursesByUserIdUseCase {
  constructor(
    private courseUserRepository: CourseUserRepository,
    private courseRepository: CourseRepository
  ) {}
  execute(userId: number) {
    // Obtain the list of courses for the user ()
    const courses = this.courseUserRepository
      .getCourseUsersByUserId(userId)
      .map((cu) => {
        return this.courseRepository.getCourseById(cu.courseId);
      })
      .filter((course) => course !== null) as Course[];
    return courses;
  }
}
