export interface CourseDetailDTO {
  id: number;
  title: string;
  description: string;
  level: string;
  category: string;
  imageUrl: string;

  instructorName: string;
  instructorAvatar: string;

  progress: number;
  xp: number;
  totalPoints: number;
}
