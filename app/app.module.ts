import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { RecentlyViewedComponent }   from './home/recently-viewed.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        RecentlyViewedComponent,
    ],
    providers: [
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
