import { MenuItemRepository } from '../repositories/MenuItemRepository';
export class GetSidebarMenuUseCase {
  constructor(private menuItemRepo: MenuItemRepository) {}

  execute() {
    return this.menuItemRepo.getMenu();
  }
}
