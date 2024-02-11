import { Test, TestingModule } from '@nestjs/testing';
import { MetodosEnvioService } from './metodos-envio.service';

describe('MetodosEnvioService', () => {
  let service: MetodosEnvioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetodosEnvioService],
    }).compile();

    service = module.get<MetodosEnvioService>(MetodosEnvioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
