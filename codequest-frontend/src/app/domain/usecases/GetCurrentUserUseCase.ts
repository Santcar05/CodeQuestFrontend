import { AuthRepository } from '../repositories/AuthRepository';

export class GetCurrentUserUseCase {
  constructor(private authRepo: AuthRepository) {}

  execute() {
    return this.authRepo.getCurrentUser();
  }
}
