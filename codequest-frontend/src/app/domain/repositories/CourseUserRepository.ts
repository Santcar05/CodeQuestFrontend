import { CourseUser } from '../models/CourseUser';

export abstract class CourseUserRepository {
  abstract getCourseUsersByUserId(userId: number): CourseUser[];
}
