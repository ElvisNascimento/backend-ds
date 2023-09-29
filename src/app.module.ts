import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CurriculosModule } from './curriculos/curriculos.module';


@Module({
  imports: [DatabaseModule, CurriculosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
