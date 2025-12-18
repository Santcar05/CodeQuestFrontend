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
    path: 'learning-course',
    loadComponent: () =>
      import('./ui/pages/learning-course-page/learning-course-page').then(
        (m) => m.LearningCoursePage
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
