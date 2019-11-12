import { Test } from '@nestjs/testing';

import { AppDataService } from './app-data.service';

describe('AppDataService', () => {
  let service: AppDataService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppDataService],
    }).compile();

    service = app.get<AppDataService>(AppDataService);
  });

  describe('getData', () => {
    it('should return "Welcome to backend!"', () => {
      expect(service.getData()).toEqual({message: 'Welcome to backend!'});
    });
  });
});
