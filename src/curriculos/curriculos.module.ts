import { Module } from '@nestjs/common';
import { CurriculosService } from './curriculos.service';
import { CurriculosController } from './curriculos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curriculo } from './entities/curriculo.entity';
import { Skill } from './entities/skills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curriculo, Skill])],
  controllers: [CurriculosController],
  providers: [CurriculosService],
})
export class CurriculosModule {}
