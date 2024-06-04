import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  private readonly users = [];

  async findAll() {
    return this.users;
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = { id: this.users.length + 1, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  async findOne(id: string) {
    const user = this.users.find(user => user.id === parseInt(id));
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async delete(id: string) {
    const userIndex = this.users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    return { message: `User with ID ${id} deleted successfully` };
  }
}
