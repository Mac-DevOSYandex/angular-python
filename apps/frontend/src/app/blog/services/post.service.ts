import { Injectable } from '@angular/core';
import { PostResource } from './post.resource';
import { Observable } from 'rxjs';
import { PostListItem } from './data_model/post-list.item';

// Separation of concerns PostService unlike PostResource may have business logic (c. DRY)
@Injectable()
export class PostService {
    constructor(private readonly postResource: PostResource) {}

    public getAllPostItems(): Observable<PostListItem[]> {
        return this.postResource.findAll();
    }
}
