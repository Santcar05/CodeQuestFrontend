import { User } from '../models/User';

export abstract class AuthRepository {
  abstract getCurrentUser(): User | null;
}
