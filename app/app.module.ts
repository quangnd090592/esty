import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';
import { HomeComponent }      from './home/home.component';
import { RecentlyViewedComponent }   from './home/recentlyReviewed/recently-viewed.component';
import { CategoryComponent }   from './home/category/category.component';
import { RecentlyUploadedComponent }   from './home/recentlyUploaded/recently-uploaded.component';
import { ShopOnlyShopComponent }   from './home/shopOnlyShop/shop-only-shop.component';
import { KeepYouSafeComponent }   from './home/keepYouSafe/keep-you-safe.component';

import { routing }            from './app.routing';
import { HomeService }        from './home/home.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        RecentlyViewedComponent,
        CategoryComponent,
        RecentlyUploadedComponent,
        ShopOnlyShopComponent,
        KeepYouSafeComponent,
    ],
    providers: [
        HomeService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
