import { User } from '../../../domain/models/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { MOCK_DB } from '../../../seed/inMemoryData';

export class UserRepositoryMockImpl implements UserRepository {
  getUserById(userId: number): User | null {
    return MOCK_DB.users.find((user) => user.id === userId) || null;
  }
}
