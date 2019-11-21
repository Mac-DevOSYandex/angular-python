import { NgModule } from '@angular/core';
import { PostListModule } from './list/post-list.module';
import { PostResource } from './services/post.resource';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [PostListModule, HttpClientModule],
    exports: [PostListModule],
    declarations: [],
    providers: [PostResource, PostService]
})
export class BlogModule {}
