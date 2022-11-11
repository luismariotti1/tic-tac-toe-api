import { Body, Controller, Post } from "@nestjs/common";
import { SingUpDto } from "./dto/sing-up.dto";
import { UsersService } from "../users/users.service";
import { SingInDto } from "./dto/sing-in.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly userService: UsersService,
              private readonly authService: AuthService) {}

  @Post("sing-in")
  singIn(@Body() singInDto: SingInDto) {
    return this.authService.singIn(singInDto);
  }

  @Post("sing-up")
  singUp(@Body() singUpDto: SingUpDto) {
    return this.userService.create(singUpDto);
  }
}
