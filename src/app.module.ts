import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CurriculosModule } from './curriculos/curriculos.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    CurriculosModule,
    UserModule,
    JwtModule.register({
      secret: 'JWTDSAPP', // Chave secreta para assinar o token
      signOptions: { expiresIn: '24h' }, // Definindo o tempo de expiração do token
    }),
    TypeOrmModule.forFeature([User]),
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
