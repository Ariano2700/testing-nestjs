import { Injectable } from '@nestjs/common';

type TaskType = {
  id: number;
  name: string;
};

@Injectable()
export class UsersService {
  private users: TaskType[] = [
    {
      id: 1,
      name: 'Ariano',
    },
    {
      id: 2,
      name: 'Mierdu',
    },
    {
      id: 3,
      name: 'Pecao',
    },
  ];

  getUsers() {
    return this.users;
  }
}
