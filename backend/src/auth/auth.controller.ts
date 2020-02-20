import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    console.log('LOG REQUEST: ', req.user);

    return req.user;
  }
}
