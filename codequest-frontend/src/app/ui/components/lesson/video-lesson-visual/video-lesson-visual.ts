import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LessonVideo } from '../../../../domain/models/lesson/LessonVideo';

@Component({
  selector: 'cq-video-lesson-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-lesson-visual.html',
  styleUrls: ['./video-lesson-visual.css'],
})
export class VideoLessonVisualComponent {
  @Input({ required: true }) video!: LessonVideo;

  currentTime = 0;

  constructor(private sanitizer: DomSanitizer) {}

  /* URL SEGURA PARA YOUTUBE */
  get youtubeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.video.youtubeId}?enablejsapi=1`
    );
  }

  onTimeUpdate(event: Event) {
    const videoEl = event.target as HTMLVideoElement;
    this.currentTime = videoEl.currentTime;
  }

  onPause() {
    const progress = Math.floor((this.currentTime / this.video.duration) * 100);
    console.log('Guardar progreso:', progress);
  }

  goToMarker(time: number) {
    const videoEl = document.getElementById('lessonVideo') as HTMLVideoElement;

    videoEl.currentTime = time;
    videoEl.play();
  }
}
