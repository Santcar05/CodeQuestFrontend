import { CourseDetailDTO } from '../../data/mappers/CourseDetailDTO';
import { CourseRepository } from '../repositories/CourseRepository';
import { CourseUserRepository } from '../repositories/CourseUserRepository';
import { UserRepository } from '../repositories/UserRepository';

export class GetCourseDetailUseCase {
  constructor(
    private courseRepo: CourseRepository,
    private courseUserRepo: CourseUserRepository,
    private userRepo: UserRepository
  ) {}

  execute(courseId: number, userId: number): CourseDetailDTO {
    const course = this.courseRepo.getCourseById(courseId);
    if (!course) throw new Error('Course not found');

    const courseUser = this.courseUserRepo.getByUserAndCourseId(userId, courseId);

    const instructor = this.userRepo.getUserById(course.instructorUserId);

    const progress = courseUser?.progress ?? 0;

    return {
      id: course.id,
      title: course.title,
      description: course.description,
      level: course.level,
      category: course.category,
      imageUrl: course.imageUrl,

      instructorName: instructor?.name ?? 'Unknown',
      instructorAvatar: instructor?.avatar ?? '',

      progress,
      xp: progress * 10, // ← CALCULADO
      totalPoints: 1000, // ← CALCULADO
    };
  }
}
