import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CurriculosModule } from './curriculos/curriculos.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, CurriculosModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
