import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ui/pages/dashboardpage/dashboardpage').then((m) => m.Dashboardpage),
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./ui/pages/course-detail-page/course-detail-page').then((m) => m.CourseDetailPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
