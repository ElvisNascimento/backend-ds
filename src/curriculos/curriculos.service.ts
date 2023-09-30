import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { Curriculo } from './entities/curriculo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skills.entity';

@Injectable()
export class CurriculosService {
  constructor(
    @InjectRepository(Curriculo)
    private readonly curriculoRepo: Repository<Curriculo>,
    @InjectRepository(Skill)
    private readonly skillRepo: Repository<Skill>,
  ) {}

  async create(createCurriculoDto: CreateCurriculoDto) {
    const skills = await Promise.all(
      createCurriculoDto.skills.map((name) => this.preloadSkillByName(name)),
    );
    const curriculo = this.curriculoRepo.create({
      ...createCurriculoDto,
      skills,
    });
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
    const skills = await Promise.all(
      updateCurriculoDto.skills.map((name) => this.preloadSkillByName(name)),
    );
    const curriculo = await this.curriculoRepo.preload({
      ...updateCurriculoDto,
      id,
      skills,
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

  private async preloadSkillByName(name: string): Promise<Skill> {
    const existingSkill = await this.skillRepo.findOne({
      where: { name },
    });
    if (!existingSkill) {
      return existingSkill;
    }
    return this.skillRepo.create({ name });
  }
}
