import { PartialType } from '@nestjs/mapped-types';
import { CreateCurriculoDto } from './create-curriculo.dto';

export class UpdateCurriculoDto extends PartialType(CreateCurriculoDto) {}
