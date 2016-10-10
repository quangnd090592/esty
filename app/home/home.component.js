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
var home_service_1 = require('./home.service');
// import { Router } from '@angular/router';
var HomeComponent = (function () {
    function HomeComponent(
        // private router : Router,
        homeService) {
        this.homeService = homeService;
    }
    ;
    HomeComponent.prototype.getRecentlyViewed = function () {
        var _this = this;
        this.homeService.getRecentlyViewed().then(function (recentlyViewed) { return _this.recentlyViewed = recentlyViewed; });
    };
    ;
    HomeComponent.prototype.getCategory = function () {
        var _this = this;
        this.homeService.getCategory().then(function (category) { return _this.category = category; });
    };
    ;
    HomeComponent.prototype.getRecentlyUploaded = function () {
        var _this = this;
        this.homeService.getRecentlyUploaded().then(function (recentlyUploaded) { return _this.recentlyUploaded = recentlyUploaded; });
    };
    ;
    HomeComponent.prototype.getShopOnlyShop = function () {
        var _this = this;
        this.homeService.getShopOnlyShop().then(function (shopOnlyShop) { return _this.shopOnlyShop = shopOnlyShop; });
    };
    ;
    HomeComponent.prototype.getKeepYouSafe = function () {
        var _this = this;
        this.homeService.getKeepYouSafe().then(function (keepYouSafe) { return _this.keepYouSafe = keepYouSafe; });
    };
    ;
    HomeComponent.prototype.ngOnInit = function () {
        this.getRecentlyViewed();
        this.getCategory();
        this.getRecentlyUploaded();
        this.getShopOnlyShop();
        this.getKeepYouSafe();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: '../view/home/home.component.html'
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map