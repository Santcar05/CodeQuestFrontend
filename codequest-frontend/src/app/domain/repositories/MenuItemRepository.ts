import { MenuItem } from '../models/ui/MenuItem';

export abstract class MenuItemRepository {
  abstract getMenu(): MenuItem[];
}
