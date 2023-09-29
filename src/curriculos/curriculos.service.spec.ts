import { Test, TestingModule } from '@nestjs/testing';
import { CurriculosService } from './curriculos.service';

describe('CurriculosService', () => {
  let service: CurriculosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurriculosService],
    }).compile();

    service = module.get<CurriculosService>(CurriculosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
