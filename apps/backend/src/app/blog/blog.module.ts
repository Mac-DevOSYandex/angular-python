import { Module } from '@nestjs/common';
import { PostController } from './post-controller';
import { PostService } from './services/post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from '../db/entity/post.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    controllers: [PostController],
    providers: [PostService]
})
export class BlogModule {}
