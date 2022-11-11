import { IsEmail, IsNotEmpty } from "class-validator";

export class SingUpDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}