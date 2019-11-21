import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { SocketIoModule } from 'ngx-socket-io';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { MaterialModule } from './shared/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, //
        // BrowserAnimationsModule,
        MaterialModule,
        RouterModule,
        FontAwesomeModule,
        SocketIoModule,
        NgbModule,
        AppRoutingModule,
        BlogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
