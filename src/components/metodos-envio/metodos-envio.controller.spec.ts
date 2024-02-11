import { Test, TestingModule } from '@nestjs/testing';
import { MetodosEnvioController } from './metodos-envio.controller';

describe('MetodosEnvioController', () => {
  let controller: MetodosEnvioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodosEnvioController],
    }).compile();

    controller = module.get<MetodosEnvioController>(MetodosEnvioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
