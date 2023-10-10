import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.userRepository.create({
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 2),
        admin: false,
      });
      return await this.userRepository.save(newUser);
    } catch (error: any) {
      if (error.detail.includes('email')) console.log('erro no email', error);
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User ID ${id} Not Found!`);
    }
    return user;
  }

  async findByEmail(email: string) {
    const userEmail = await this.userRepository.findOne({
      where: { email },
    });
    if (!userEmail) {
      throw new NotFoundException(`userEmail ${email} Not Found!`);
    }
    return userEmail;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userRepository.preload({
      ...updateUserDto,
      id,
    });
    if (!updateUser) {
      throw new NotFoundException(`User ID ${id} Not Found!`);
    }
    return this.userRepository.save(updateUser);
  }

  async remove(id: number) {
    const userToRemove = await this.userRepository.findOne({
      where: { id },
    });
    if (!userToRemove) {
      throw new NotFoundException(`User ID ${id} Not Found!`);
    }
    return this.userRepository.delete(userToRemove);
  }

  async registerUser(newUser: CreateUserDto) {
    return console.log(newUser);
  }
}
