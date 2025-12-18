import { Injectable } from '@angular/core';
import { LessonVideoRepository } from '../../../../domain/repositories/lesson/LessonVideoRepository';
import { LessonVideo } from '../../../../domain/models/lesson/LessonVideo';
import { MOCK_DB } from '../../../../seed/inMemoryData';

@Injectable({ providedIn: 'root' })
export class LessonVideoRepositoryMock implements LessonVideoRepository {
  async getVideoByLessonId(lessonId: string): Promise<LessonVideo> {
    const video = MOCK_DB.lessonVideos.find((v) => v.lessonId === lessonId);

    if (!video) {
      throw new Error('Video not found for lesson');
    }

    return structuredClone(video);
  }

  async saveProgress(videoId: string, progress: number): Promise<void> {
    const video = MOCK_DB.lessonVideos.find((v) => v.id === videoId);

    if (video) {
      video.progress = progress;
    }
  }
}
