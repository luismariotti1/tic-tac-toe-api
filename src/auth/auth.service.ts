import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { SingUpDto } from "./dto/sing-up.dto";
import { SingInDto } from "./dto/sing-in.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService) {
  }

  async validateUser(username, password): Promise<any> {
    let credentials = { username, password };
    return await this.usersService.validate(credentials);
  }

  async singIn(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
