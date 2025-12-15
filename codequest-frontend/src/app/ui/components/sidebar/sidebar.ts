import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetSidebarMenuUseCase } from '../../../domain/usecases/GetSideBarMenuUseCase';
import { GetCurrentUserUseCase } from '../../../domain/usecases/GetCurrentUserUseCase';
import { MenuItemRepository } from '../../../domain/repositories/MenuItemRepository';
import { AuthRepository } from '../../../domain/repositories/AuthRepository';

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
  menu = new GetSidebarMenuUseCase(inject(MenuItemRepository)).execute();

  user = new GetCurrentUserUseCase(inject(AuthRepository)).execute();
}
