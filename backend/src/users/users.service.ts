import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {

  private users: User[] = [
    {
      id: 1,
      username: 'jhondoe',
      password: 'password'
    },
    {
      id: 2,
      username: 'jperez',
      password: 'password'
    },
    {
      id: 3,
      username: 'a.antezana',
      password: 'password'
    }
  ];

  findByUsername(username: string): User {
    return this.users.find(user => user.username === username);
  }

}
