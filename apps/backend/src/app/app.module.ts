import { Module } from '@nestjs/common';

import { AppGateway } from './app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataService } from './app-data.service';
import { PythonService } from './python.service';
import { BlogModule } from './blog/blog.module';

@Module({
    imports: [BlogModule],
    controllers: [],
    providers: [
        AppDataService, //
        AppGateway,
        PythonService
    ]
})
export class AppModule {}
