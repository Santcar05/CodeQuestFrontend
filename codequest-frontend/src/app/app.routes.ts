import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ui/pages/dashboardpage/dashboardpage').then((m) => m.Dashboardpage),
  },
];
