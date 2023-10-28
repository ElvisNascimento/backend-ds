import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CurriculosService } from './curriculos.service';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('curriculos')
export class CurriculosController {
  constructor(private readonly curriculosService: CurriculosService) {}

  @IsPublic()
  @Post()
  create(@Body() createCurriculoDto: CreateCurriculoDto) {
    return this.curriculosService.create(createCurriculoDto);
  }

  @IsPublic()
  @Get()
  findAll() {
    return this.curriculosService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.curriculosService.findByEmail(email);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurriculoDto: UpdateCurriculoDto,
  ) {
    return this.curriculosService.update(+id, updateCurriculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculosService.remove(+id);
  }
}
