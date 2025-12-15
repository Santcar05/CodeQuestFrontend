import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthRepository } from './domain/repositories/AuthRepository';
import { MenuItemRepository } from './domain/repositories/MenuItemRepository';
import { AuthRepositoryMock } from './data/source/inmemorydata/AuthRepositoryMockImpl';
import { MenuItemRepositoryMock } from './data/source/inmemorydata/MenuItemRepositoryMockImpl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Repository Implementations
    { provide: AuthRepository, useClass: AuthRepositoryMock },
    { provide: MenuItemRepository, useClass: MenuItemRepositoryMock },
  ],
};
