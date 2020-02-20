import { Module, DynamicModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstans } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';

const JwtDynamicModule: DynamicModule = JwtModule.register({
  secret: jwtConstans.secret,
  signOptions: { expiresIn: '60s' }
});

@Module({
  imports: [UsersModule, PassportModule, JwtDynamicModule],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
