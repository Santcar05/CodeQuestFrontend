import { AuthRepository } from '../../../domain/repositories/AuthRepository';
import { MOCK_DB } from '../../../seed/inMemoryData';

export class AuthRepositoryMock implements AuthRepository {
  getCurrentUser() {
    return MOCK_DB.user;
  }
}
