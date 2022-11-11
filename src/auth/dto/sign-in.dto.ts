import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInDto {
  username: string;

  @IsNotEmpty()
  password: string;
}