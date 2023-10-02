import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // const { email, name } = createUserDto;
    // const existingUserEmail = await this.findByEmail(email);
    // const existingUserName = await this.findByName(name);

    // if (existingUserEmail) {
    //   throw new Error('Este e-mail já está em uso. Por favor, escolha outro.');
    // }
    // if (existingUserName) {
    //   throw new Error('Este usuario já está em uso. Por favor, escolha outro.');
    // }

    try {
      const newUser = this.userRepo.create({
        ...createUserDto,
        admin: false,
      });
      return await this.userRepo.save(newUser);
    } catch (error: any) {
      if (error.detail.includes('email')) console.log('erro no email', error);
    }
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User ID ${id} Not Found!`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userRepo.preload({
      ...updateUserDto,
      id,
    });
    if (!updateUser) {
      throw new NotFoundException(`User ID ${id} Not Found!`);
    }
    return this.userRepo.save(updateUser);
  }

  async remove(id: number) {
    const userToRemove = await this.userRepo.findOne({
      where: { id },
    });
    if (!userToRemove) {
      throw new NotFoundException(`User ID ${id} Not Found!`);
    }
    return this.userRepo.delete(userToRemove);
  }

  // async findByEmail(email: string) {
  //   return await this.userRepo.findOne({ where: { email } });
  // }

  // async findByName(name: string) {
  //   return await this.userRepo.findOne({ where: { name } });
  // }

  async registerUser(newUser: CreateUserDto) {
    return newUser;
  }
}
