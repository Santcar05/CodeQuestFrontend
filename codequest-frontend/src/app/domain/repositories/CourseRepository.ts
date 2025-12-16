import { Course } from '../models/Course';

export abstract class CourseRepository {
  abstract getCourses(): Course[];
  abstract getCourseById(id: number): Course | null;
}
