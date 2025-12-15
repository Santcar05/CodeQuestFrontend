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
};
