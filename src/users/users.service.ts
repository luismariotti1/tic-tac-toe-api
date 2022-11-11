import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async create(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    return await this.userRepository.save(user);
  }
}
