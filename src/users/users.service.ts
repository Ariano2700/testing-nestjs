import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }

  async getUser(id: string) {
    const userFound = this.prisma.user.findUnique({ where: { id } });
    if (!userFound) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return userFound;
  }
}
