import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { SignUpDto } from "./dto/sign-up.dto";
import { UsersService } from "../users/users.service";
import { SignInDto } from "./dto/sign-in.dto";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { LocalAuthGuard } from "./guard/local-auth.guard";
import { ConfigService } from "@nestjs/config";

@Controller("auth")
export class AuthController {
  constructor(private readonly userService: UsersService,
              private readonly authService: AuthService,) {}

  @UseGuards(LocalAuthGuard)
  @Post("sign-in")
  async signIn(@Body() signInDto: SignInDto, @Res() res: Response) {
    const response = await this.authService.signIn(signInDto);
    return res.status(200).cookie("access_token", response.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    }).send({user: response.user});
  }

  @Post("sign-up")
  signUp(@Body() signUpDto: SignUpDto) {
    return this.userService.create(signUpDto);
  }
}
