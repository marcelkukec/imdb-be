import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserRegisterDto } from "./user-register.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userRegisterDto: UserRegisterDto) {
    return await this.authService.register(userRegisterDto);
  }
}
