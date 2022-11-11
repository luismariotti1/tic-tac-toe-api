import { IsEmail, IsNotEmpty } from "class-validator";

export class SingInDto {
  username: string;

  @IsNotEmpty()
  password: string;
}