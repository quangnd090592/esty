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
require('rxjs/add/operator/toPromise');
var mock_data_1 = require('../mock-data');
var HomeService = (function () {
    function HomeService() {
    }
    // constructor(private http: Http) {}
    // getQuang() : {}[]{
    // 	return RECENTLY_REVIEWED;
    // }
    HomeService.prototype.getRecentlyViewed = function () {
        console.log(mock_data_1.RECENTLY_REVIEWED, 'RECENTLY_REVIEWED');
        return Promise.resolve(mock_data_1.RECENTLY_REVIEWED);
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map