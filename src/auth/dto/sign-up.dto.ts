import { IsEmail, IsNotEmpty } from "class-validator";

export class SignUpDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}