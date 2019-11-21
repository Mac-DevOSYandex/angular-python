import { Injectable, Logger } from '@nestjs/common';
import { Post } from '../../db/models/post.model';
import { Observable, of } from 'rxjs';
import { POSTS } from '../mocks/posts.mock'; // mocked database connection

@Injectable()
export class PostService {
    private readonly logger = new Logger(PostService.name, true);

    public findAll(): Observable<Post[]> {
        return of(POSTS);
    }
}
