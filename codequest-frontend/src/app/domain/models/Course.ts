export interface Course {
  id: number;
  title: string;
  description: string;
  level: string; // ADDED
  imageUrl: string; // ADDED
  category: string; // ADDED
  // Instructor user
  instructorUserId: number;
}

// Elements of a course which can not be attributtes and
// should be calculated in a method
/*
  - xp
  - progress
  - duration
  - rating
  - students
  - totalPoints
  
*/
