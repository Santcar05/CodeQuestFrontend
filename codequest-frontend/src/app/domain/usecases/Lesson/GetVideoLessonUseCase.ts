import { Injectable } from '@angular/core';
import { LessonVideoRepository } from '../../repositories/lesson/LessonVideoRepository';

@Injectable()
export class GetVideoLessonUseCase {
  constructor(private repo: LessonVideoRepository) {}

  execute(lessonId: string) {
    return this.repo.getVideoByLessonId(lessonId);
  }
}
