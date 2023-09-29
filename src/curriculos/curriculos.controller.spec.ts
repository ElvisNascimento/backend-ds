import { Test, TestingModule } from '@nestjs/testing';
import { CurriculosController } from './curriculos.controller';
import { CurriculosService } from './curriculos.service';

describe('CurriculosController', () => {
  let controller: CurriculosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurriculosController],
      providers: [CurriculosService],
    }).compile();

    controller = module.get<CurriculosController>(CurriculosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
