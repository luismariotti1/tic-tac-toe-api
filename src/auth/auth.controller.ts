import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { SingUpDto } from "./dto/sing-up.dto";
import { UsersService } from "../users/users.service";
import { SingInDto } from "./dto/sing-in.dto";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { LocalAuthGuard } from "./guard/local-auth.guard";
import { ConfigService } from "@nestjs/config";

@Controller("auth")
export class AuthController {
  constructor(private readonly userService: UsersService,
              private readonly authService: AuthService,
              private readonly configService: ConfigService) {}

  @UseGuards(LocalAuthGuard)
  @Post("sing-in")
  async singIn(@Body() singInDto: SingInDto, @Res() res: Response) {
    let token = await this.authService.singIn(singInDto);
    return res.status(200).cookie("access_token:", token.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    }).send({success: true});
  }

  @Post("sing-up")
  singUp(@Body() singUpDto: SingUpDto) {
    return this.userService.create(singUpDto);
  }
}
