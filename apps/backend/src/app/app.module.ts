import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppGateway } from './app.gateway';
import { AppDataService } from './app-data.service';
import { PythonService } from './python.service';
import { BlogModule } from './blog/blog.module';
import { PostEntity } from './db/entity/post.entity';

@Module({
    imports: [
        // TypeOrmModule.forRoot(), //
        BlogModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '::1',
            port: 5432,
            username: 'blog-user',
            password: 'p@ssw0rd',
            database: 'blog-app',
            entities: [PostEntity],
            // entities: [__dirname + 'apps/**/*.entity{.ts,.js}'],
            synchronize: true
        })
    ],
    controllers: [],
    providers: [
        AppDataService, //
        AppGateway,
        PythonService
    ]
})
export class AppModule {}
