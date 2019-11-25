import { Controller, Get, Post, Body } from '@nestjs/common';
// import { Post } from '../db/models/post.model';
import { Observable } from 'rxjs';
import { PostService } from './services/post.service';
import { PostEntity } from '../db/entity/post.entity';
import { CreatePostDTO } from './dto/create-post.dto';

// routing is generated base on the decoration of controller
@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createPostDTO: CreatePostDTO) {
        return this.postService.create(createPostDTO);
    }
}
