import { Component, OnInit } from '@angular/core';
import { LearningMethodologiesComponent } from '../../components/learning-methodologies/learning-methodologies';
import { VideoLessonVisualComponent } from '../../components/lesson/video-lesson-visual/video-lesson-visual';
import { GetVideoLessonUseCase } from '../../../domain/usecases/Lesson/GetVideoLessonUseCase';
import { LessonVideoRepository } from '../../../domain/repositories/lesson/LessonVideoRepository';
import { LessonVideoRepositoryMock } from '../../../data/source/inmemorydata/Lesson/LessonVideoRepositoryMockImpl';
import { LessonVideo } from '../../../domain/models/lesson/LessonVideo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning-course-page',
  imports: [LearningMethodologiesComponent, VideoLessonVisualComponent, CommonModule],
  templateUrl: './learning-course-page.html',
  styleUrl: './learning-course-page.css',
  providers: [
    GetVideoLessonUseCase,
    {
      provide: LessonVideoRepository,
      useClass: LessonVideoRepositoryMock,
    },
  ],
})
export class LearningCoursePage implements OnInit {
  lessonVideo?: LessonVideo;

  constructor(private getVideoLessonUseCase: GetVideoLessonUseCase) {}

  async ngOnInit() {
    // A esto luego vendrá de la ruta (route param)
    const lessonId = 'lesson-1';

    this.lessonVideo = await this.getVideoLessonUseCase.execute(lessonId);
  }
}
