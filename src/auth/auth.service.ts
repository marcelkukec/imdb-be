import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../users/users.service";
import { UserRegisterDto } from "./user-register.dto";
import { UserLoginDto } from "./user-login.dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async register(userRegisterDto: UserRegisterDto) {
    return await this.userService.create(userRegisterDto);
  }

  async validateUser(userLoginDto: UserLoginDto) {
    const user = await this.userService.findByEmail(userLoginDto.email);
    if(user && (await bcrypt.compare(userLoginDto.password, user.password))) {
      return user;
    } else {
      throw new UnauthorizedException('Bad login');
    }
  }

  async login(userLoginDto: UserLoginDto) {
    const user = await this.validateUser(userLoginDto);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}