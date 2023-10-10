import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CurriculosModule } from './curriculos/curriculos.module';
import { UserModule } from './user/user.module';
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
    TypeOrmModule.forFeature([User]),
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
