import { Body, Controller, Post } from "@nestjs/common";
import { SingUpDto } from "./dto/sing-up.dto";
import { UsersService } from "../users/users.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post('sing-up')
  singUp(@Body() singUpDto: SingUpDto) {
    return this.userService.create(singUpDto);
  }
}
