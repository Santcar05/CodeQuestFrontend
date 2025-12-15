import { MenuItemRepository } from '../../../domain/repositories/MenuItemRepository';
import { MOCK_DB } from '../../../seed/inMemoryData';

export class MenuItemRepositoryMock implements MenuItemRepository {
  getMenu() {
    return MOCK_DB.sidebarMenu;
  }
}
