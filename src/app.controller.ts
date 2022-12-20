import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AppService } from "./app.service";
import { JwtAuthGuard } from "./auth/guard/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  hello(@Request() req) {
    return this.appService.getHello();
  }
}
