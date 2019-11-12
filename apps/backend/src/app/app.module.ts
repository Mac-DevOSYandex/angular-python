import { Module } from '@nestjs/common';

import { AppGateway } from './app.gateway';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataService } from './app-data.service';
import { PythonService } from './python.service';
// import { Connection } from 'typeorm';

@Module({
  // imports: [ TypeOrmModule.forRoot() ],
  controllers: [],
  providers: [AppDataService, AppGateway, PythonService],
})
export class AppModule {

  // constructor(private readonly connection: Connection) {}
}
