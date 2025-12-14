import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
}
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menu: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard.png',
      route: '/dashboard',
    },
    { label: 'Courses', icon: 'courses.png', route: '/courses' },
    { label: 'Community', icon: 'community.png', route: '/community' },
    { label: 'Logros', icon: 'achievement.png', route: '/achievements' },
    { label: 'Profile', icon: 'profile.png', route: '/profile' },
  ];
}
