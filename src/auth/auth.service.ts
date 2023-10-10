import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async login(credentials: any) {
    const user = await this.validateUser(credentials);
    if (user) {
      const token = this.jwtService.sign({
        email: user.email,
        admin: user.admin,
      });
      return { token, user };
    }
    throw new NotFoundException(`User or password incorrect!`);
  }

  async validateUser(credentials: {
    email: string;
    password: string;
  }): Promise<User | null> {
    const { email, password } = credentials;
    return await this.userRepository.findOne({ where: { email, password } });
  }
}
