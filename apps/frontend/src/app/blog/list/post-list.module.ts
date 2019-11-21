import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list.component';
import { MaterialModule } from '../../shared/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [MaterialModule, CommonModule],
    exports: [PostListComponent, MaterialModule],
    declarations: [PostListComponent],
    providers: []
})
export class PostListModule {}
