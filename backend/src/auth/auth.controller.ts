import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authservice: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    console.log('LOG REQUEST: ', req.user);

    // return req.user;
    return this.authservice.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return {
      profileDetail: '...............db',
      userInfo:req.user
    };
  }


}
