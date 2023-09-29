import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { Curriculo } from './entities/curriculo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CurriculosService {
  constructor(
    @InjectRepository(Curriculo)
    private readonly curriculoRepo: Repository<Curriculo>,
  ) {}

  async create(createCurriculoDto: CreateCurriculoDto) {
    const curriculo = this.curriculoRepo.create(createCurriculoDto);
    return this.curriculoRepo.save(curriculo);
  }

  async findAll() {
    return this.curriculoRepo.find();
  }

  async findOne(id: number) {
    const curriculo = await this.curriculoRepo.findOne({
      where: { id },
    });
    if (!curriculo) {
      throw new NotFoundException(`Curriculo ID ${id} Not Found!`);
    }
    return curriculo;
  }

  async update(id: number, updateCurriculoDto: UpdateCurriculoDto) {
    const curriculo = await this.curriculoRepo.preload({
      ...updateCurriculoDto,
      id,
    });
    if (!curriculo) {
      throw new NotFoundException(`Curriculo ID ${id} Not Found!`);
    }
    return this.curriculoRepo.save(curriculo);
  }

  async remove(id: number) {
    const curriculo = await this.curriculoRepo.findOne({
      where: { id },
    });
    if (!curriculo) {
      throw new NotFoundException(`Curriculo ID ${id} Not Found!`);
    }
    return this.curriculoRepo.remove(curriculo);
  }
}
