import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({summary: "Get all users"})
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  @ApiOperation({summary: "Create users"})
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Get(':id')
  @ApiOperation({summary: "Get user by id"})
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    console.log(typeof query.name);
    console.log(typeof query.age);
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
