import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLessonVisual } from './video-lesson-visual';

describe('VideoLessonVisual', () => {
  let component: VideoLessonVisual;
  let fixture: ComponentFixture<VideoLessonVisual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoLessonVisual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLessonVisual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
