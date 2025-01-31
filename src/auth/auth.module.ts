import { Module } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: "dfgldlitlidsrs",
    signOptions: { expiresIn: "5h" }
  })],
  controllers: [AuthController],
  providers: [AuthService],

})
export class AuthModule {}
