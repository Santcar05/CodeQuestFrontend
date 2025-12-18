export type VideoSourceType = 'YOUTUBE' | 'LOCAL' | 'REMOTE';

export interface LessonVideo {
  id: string;
  lessonId: string;
  title: string;
  sourceType: VideoSourceType;

  // para LOCAL / REMOTE
  videoUrl?: string;

  // para YOUTUBE
  youtubeId?: string;

  duration: number;
  progress: number;
  markers: VideoMarker[];
}

export interface VideoMarker {
  time: number;
  label: string;
}
