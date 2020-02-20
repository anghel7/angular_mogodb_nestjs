import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
    private jwtSevice: JwtService) { }

  validateUser(username: string, password: string): any {
    const user = this.userService.findByUsername(username);
    if (user && user.password === password) {
      return {
        id: user.id,
        username: user.username
      };
    } else {
      return undefined;
    }
  }

  login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id
    };
    return {
      access_token: this.jwtSevice.sign(payload)
    }
  }
}
