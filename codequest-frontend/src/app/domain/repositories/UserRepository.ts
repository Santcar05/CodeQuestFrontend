import { User } from '../models/User';
export abstract class UserRepository {
  abstract getUserById(userId: number): User | null;
}
