import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
