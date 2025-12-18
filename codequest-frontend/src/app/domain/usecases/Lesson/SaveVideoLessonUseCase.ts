import { Injectable } from '@angular/core';
import { LessonVideoRepository } from '../../repositories/lesson/LessonVideoRepository';

@Injectable()
export class SaveVideoProgressUseCase {
  constructor(private repo: LessonVideoRepository) {}

  execute(videoId: string, progress: number) {
    return this.repo.saveProgress(videoId, progress);
  }
}
