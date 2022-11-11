import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

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
    const response = await this.usersService.findOne(user.username);
    const payload = { username: response.username, sub: response.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
