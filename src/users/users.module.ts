import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userProvider } from "./entity/user.provider";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [...userProvider, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
