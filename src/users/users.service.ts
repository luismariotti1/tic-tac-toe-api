import { ConflictException, Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>
  ) {
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { username } });
  }

  async validate(credentials: any): Promise<User | undefined> {
    if (!credentials.email && !credentials.username) {
      throw new Error("Credentials must have email or username");
    }

    const user = await this.userRepository.findOne({
      where: [
        { email: credentials.email },
        { username: credentials.username }
      ],
      select: ["id", "username", "email", "password"],
    });

    if (user && await bcrypt.compare(credentials.password, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async create(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    try {
      const response = await this.userRepository.save(user);
      delete response.password;
      return response;
    } catch (error) {
      if (error.sqlState === "23000") {
        throw new ConflictException("Username or Email already exists");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
