import { LessonVideo } from '../../models/lesson/LessonVideo';

export abstract class LessonVideoRepository {
  abstract getVideoByLessonId(lessonId: string): Promise<LessonVideo>;
  abstract saveProgress(videoId: string, progress: number): Promise<void>;
}
