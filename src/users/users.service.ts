import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
