import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  hello(@Request() req) {
    return 'Hello ' + req.user.username;
  }
}
