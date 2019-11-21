import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { PostListItem } from '../services/data_model/post-list.item';

@Component({
    selector: 'ig-post-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    // public postList = postList;
    public postList: Observable<PostListItem[]>;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postList = this.postService.getAllPostItems();
    }
}

// const postList = [
//     {
//         title: 'Some Title 5',
//         subTitle: 'Some Title 5',
//         imageUrl: 'http://127.0.0.1:8080/%40Images/nature/nature-5.jpg',
//         content:
//             'And Alice said oh dear Mr Mouse are you a rat or a Moose And Alice said'
//     },
//     {
//         title: 'Some Title 3',
//         subTitle: 'Some Title 3',
//         imageUrl: 'http://127.0.0.1:8080/%40Images/nature/nature-3.jpg',
//         content:
//             'And Alice said oh dear Mr Mouse are you a rat or a Moose And Alice said'
//     },
//     {
//         title: 'Some Title 2',
//         subTitle: 'Some Title 2',
//         imageUrl: 'http://127.0.0.1:8080/%40Images/nature/nature-2.jpg',
//         content:
//             'And Alice said oh dear Mr Mouse are you a rat or a Moose And Alice said'
//     },
//     {
//         title: 'Some Title 1',
//         subTitle: 'Some Title 1',
//         imageUrl: 'http://127.0.0.1:8080/%40Images/nature/nature-1.jpg',
//         content:
//             'And Alice said oh dear Mr Mouse are you a rat or a Moose And Alice said'
//     }
// ];
