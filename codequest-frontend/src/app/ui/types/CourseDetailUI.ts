import { Course } from '../../domain/models/Course';
import { User } from '../../domain/models/User';

export interface CourseDetailUI {
  course: Course;
  instructor: User;
  progress: number;
  xp: number;
  totalPoints: number;
}
