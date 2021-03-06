"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var recently_viewed_component_1 = require('./home/recentlyReviewed/recently-viewed.component');
var category_component_1 = require('./home/category/category.component');
var recently_uploaded_component_1 = require('./home/recentlyUploaded/recently-uploaded.component');
var shop_only_shop_component_1 = require('./home/shopOnlyShop/shop-only-shop.component');
var keep_you_safe_component_1 = require('./home/keepYouSafe/keep-you-safe.component');
var app_routing_1 = require('./app.routing');
var home_service_1 = require('./home/home.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                recently_viewed_component_1.RecentlyViewedComponent,
                category_component_1.CategoryComponent,
                recently_uploaded_component_1.RecentlyUploadedComponent,
                shop_only_shop_component_1.ShopOnlyShopComponent,
                keep_you_safe_component_1.KeepYouSafeComponent,
            ],
            providers: [
                home_service_1.HomeService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map