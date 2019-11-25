import { Injectable, Logger } from '@nestjs/common';
// import { Post } from '../../db/models/post.model';
import { Observable, of, from } from 'rxjs';
// import { POSTS } from '../mocks/posts.mock'; // mocked database connection
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../../db/entity/post.entity';
import { CreatePostDTO } from '../dto/create-post.dto';

@Injectable()
export class PostService {
    private readonly logger = new Logger(PostService.name, true);

    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>
    ) {}

    public findAll(): Observable<PostEntity[]> {
        return from(this.postRepository.find());
    }

    public create(createPostDTO: CreatePostDTO) {
        return this.postRepository.save(createPostDTO);
    }
}
