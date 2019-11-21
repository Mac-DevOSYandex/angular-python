import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ApiConfig } from '../api-config';
import { Observable } from 'rxjs';
import { PostListItem } from './data_model/post-list.item';
import { environment as env } from '../../../environments/environment';

// PostResource's only purpose is to communicate with the `/api`
@Injectable()
export class PostResource {
    private readonly URL = `${env.url}/posts `;

    constructor(private http: HttpClient) {}

    public findAll(): Observable<PostListItem[]> {
        // return this.http.get<any>(this.URL); // Or...
        return this.http.get(this.URL) as Observable<PostListItem[]>;
    }
}
