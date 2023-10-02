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

@Controller('curriculos')
export class CurriculosController {
  constructor(private readonly curriculosService: CurriculosService) {}

  @Post()
  create(@Body() createCurriculoDto: CreateCurriculoDto) {
    return this.curriculosService.create(createCurriculoDto);
  }

  @Get()
  findAll() {
    return this.curriculosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curriculosService.findOne(+id);
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
