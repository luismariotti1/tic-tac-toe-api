import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from './auth/Guard/local-auth.guard';
import { JwtAuthGuard } from './auth/Guard/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  hello(@Request() req) {
    return 'Hello ' + req.user.username;
  }
}
