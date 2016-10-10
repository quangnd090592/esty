import { Component }		from '@angular/core';
import { HomeService } 		from './home.service';
// import { Router } from '@angular/router';

@Component ({
	moduleId: module.id,
	selector : 'home',
	templateUrl : '../view/home/home.component.html'
})

export class HomeComponent {
	constructor(
		// private router : Router,
		private homeService: HomeService
	) { };
	recentlyViewed : {}[];
	category : {}[];
	recentlyUploaded : {}[];
	shopOnlyShop : {}[];
	keepYouSafe : {}[];

	getRecentlyViewed(): void {
	    this.homeService.getRecentlyViewed().then(recentlyViewed => this.recentlyViewed = recentlyViewed);
	};

	getCategory(): void {
	    this.homeService.getCategory().then(category => this.category = category);
	};

	getRecentlyUploaded(): void {
	    this.homeService.getRecentlyUploaded().then(recentlyUploaded => this.recentlyUploaded = recentlyUploaded);
	};

	getShopOnlyShop(): void {
	    this.homeService.getShopOnlyShop().then(shopOnlyShop => this.shopOnlyShop = shopOnlyShop);
	};

	getKeepYouSafe(): void {
	    this.homeService.getKeepYouSafe().then(keepYouSafe => this.keepYouSafe = keepYouSafe);
	};

	ngOnInit(): void {
		this.getRecentlyViewed();
		this.getCategory();
		this.getRecentlyUploaded();
		this.getShopOnlyShop();
		this.getKeepYouSafe();
  	}
}