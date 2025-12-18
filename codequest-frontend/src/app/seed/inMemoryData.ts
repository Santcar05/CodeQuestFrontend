import { User } from '../domain/models/User';
import { LessonVideo } from '../domain/models/lesson/LessonVideo';
import { MenuItem } from '../domain/models/ui/MenuItem';
import { LearningMethod } from '../domain/models/lesson/LearningMethod';
export const MOCK_DB = {
  user: <User>{
    id: 1,
    name: 'Santiago Castro',
    role: 'EL GOAT',
    avatar: 'avatarStudent.png',
    email: 'xgNtA@example.com',
  },

  users: <User[]>[
    {
      id: 1,
      name: 'Santiago Castro',
      role: 'EL GOAT',
      avatar: 'avatarStudent.png',
      email: 'xgNtA@example.com',
    },
    {
      id: 2,
      name: 'Carlos Rios',
      role: 'Instructor',
      avatar: 'avatarInstructor.png',
      email: '1oJQq@example.com',
    },
  ],

  sidebarMenu: <MenuItem[]>[
    { label: 'Dashboard', route: '/dashboard', icon: '/dashboard.png' },
    { label: 'Courses', route: '/courses', icon: '/courses.png' },
    { label: 'Community', route: '/community', icon: '/community.png' },
    { label: 'Logros', route: '/achievements', icon: '/achievement.png' },
    { label: 'Profile', route: '/profile', icon: '/profile.png' },
  ],

  courses: [
    {
      id: 1,
      title: 'Introducción a la Programación con C++ CodeQuest',
      description:
        'Este curso te llevará desde los conceptos básicos hasta temas avanzados en C++. Aprenderás a escribir código eficiente y a desarrollar aplicaciones completas. Comenzando desde cero, este curso es perfecto para principiantes y aquellos que buscan fortalecer sus habilidades en programación.',
      level: 'Beginner',
      imageUrl: 'https://i.imgur.com/XSgpcs0.gif',
      category: 'Category 1',
      instructorUserId: 2,
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'Description of course 2',
      level: 'Intermediate',
      imageUrl: '/course2.png',
      category: 'Category 2',
      instructorUserId: 2,
    },
    {
      id: 3,
      title: 'Course 3',
      description: 'Description of course 3',
      level: 'Advanced',
      imageUrl: '/course3.png',
      category: 'Category 3',
      instructorUserId: 2,
    },
    {
      id: 4,
      title: 'Course 4',
      description: 'Description of course 4',
      level: 'Expert',
      imageUrl: '/course4.png',
      category: 'Category 4',
      instructorUserId: 2,
    },
    {
      id: 5,
      title: 'Course 5',
      description: 'Description of course 5',
      level: 'Beginner',
      imageUrl: '/course5.png',
      category: 'Category 5',
      instructorUserId: 2,
    },
  ],

  dailyQuests: [
    {
      title: 'Quest 1',
      description: 'Description 1',
      completed: false,
    },
    {
      title: 'Quest 2',
      description: 'Description 2',
      completed: true,
    },
    {
      title: 'Quest 3',
      description: 'Description 3',
      completed: true,
    },
  ],

  userCourses: [
    { id: 1, userId: 1, courseId: 1, progress: 20 },
    { id: 2, userId: 1, courseId: 2, progress: 50 },
    { id: 3, userId: 1, courseId: 3, progress: 80 },
    { id: 4, userId: 2, courseId: 4, progress: 10 },
    { id: 5, userId: 2, courseId: 5, progress: 0 },
  ],

  lessonVideos: <LessonVideo[]>[
    {
      id: 'vid-yt-1',
      lessonId: 'lesson-1',
      title: 'Introducción a C++ (YouTube)',
      sourceType: 'YOUTUBE',
      youtubeId: 'vLnPwxZdW4Y',
      duration: 600,
      progress: 0,
      markers: [
        { time: 40, label: '¿Qué es C++?' },
        { time: 180, label: 'Variables' },
      ],
    },
    {
      id: 'vid-local-1',
      lessonId: 'lesson-2',
      title: 'Variables en C++ (Local)',
      sourceType: 'LOCAL',
      videoUrl: 'assets/videos/cpp-variables.mp4',
      duration: 720,
      progress: 0,
      markers: [{ time: 60, label: 'Ejemplo' }],
    },
  ],
};

/*
paso a paso para agregar un nuevo componente con caso de uso nuevo

*/
