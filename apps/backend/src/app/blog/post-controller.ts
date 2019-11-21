import { Controller, Get } from '@nestjs/common';
import { Post } from '../db/models/post.model';
import { Observable } from 'rxjs';
import { PostService } from './services/post.service';

// routing is generated base on the decoration of controller
@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    findAll(): Observable<Post[]> {
        return this.postService.findAll();
    }

    // @Post()
    // async addBook(@Body() createBookDTO: CreateBookDTO) {
    //     const book = await this.booksService.addBook(createBookDTO);
    //     return book;
    // }
}
