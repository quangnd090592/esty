import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';
import { HomeComponent }      from './home/home.component';
import { routing }            from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
