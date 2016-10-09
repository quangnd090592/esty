import { Component }		from '@angular/core';
import { HomeService } 		from './home.service';
// import { Router } from '@angular/router';

@Component ({
	moduleId: module.id,
	selector : 'home',
	templateUrl : '../view/home/home.component.html'
})

export class HomeComponent {
	recently : {}[];

	constructor(
		// private router : Router,
		private homeService: HomeService
	) { };

	getRecentlyViewed(): void {
	    this.homeService.getRecentlyViewed().then(recently => this.recently = recently);
	    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	};
}