import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService) { }

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
}
