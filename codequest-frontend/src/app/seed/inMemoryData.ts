import { User } from '../domain/models/User';
import { MenuItem } from '../domain/models/ui/MenuItem';
export const MOCK_DB = {
  user: <User>{
    id: '1',
    name: 'Santiago Castro',
    role: 'EL GOAT',
    avatar: '/avatar.png',
  },

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
      title: 'Course 1',
      description: 'Description of course 1',
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'Description of course 2',
    },
    {
      id: 3,
      title: 'Course 3',
      description: 'Description of course 3',
    },
    {
      id: 4,
      title: 'Course 4',
      description: 'Description of course 4',
    },
    {
      id: 5,
      title: 'Course 5',
      description: 'Description of course 5',
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
};
