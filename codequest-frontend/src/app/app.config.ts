import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthRepository } from './domain/repositories/AuthRepository';
import { MenuItemRepository } from './domain/repositories/MenuItemRepository';
import { AuthRepositoryMock } from './data/source/inmemorydata/AuthRepositoryMockImpl';
import { MenuItemRepositoryMock } from './data/source/inmemorydata/MenuItemRepositoryMockImpl';
import { DashboardRepository } from './domain/repositories/DashBoardRepository';
import { DashboardRepositoryMock } from './data/source/inmemorydata/DashBoardRepositoryMockImpl';
import { CourseUserRepository } from './domain/repositories/CourseUserRepository';
import { CourseUserRepositoryMockImpl } from './data/source/inmemorydata/CourseUserRepositoryMockImpl';
import { CourseRepository } from './domain/repositories/CourseRepository';
import { CourseRepositoryMockImpl } from './data/source/inmemorydata/CourseRepositoryMockImpl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Repository Implementations
    { provide: AuthRepository, useClass: AuthRepositoryMock },
    { provide: MenuItemRepository, useClass: MenuItemRepositoryMock },
    { provide: DashboardRepository, useClass: DashboardRepositoryMock },
    { provide: CourseUserRepository, useClass: CourseUserRepositoryMockImpl },
    { provide: CourseRepository, useClass: CourseRepositoryMockImpl },
  ],
};
