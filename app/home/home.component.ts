import { Component }		from '@angular/core';
import { HomeService } 		from './home.service';
// import { Router } from '@angular/router';

@Component ({
	moduleId: module.id,
	selector : 'home',
	// template : 'ky qua {{test}}'
	templateUrl : '../view/home/home.component.html'
})

export class HomeComponent {
	constructor(
		// private router : Router,
		private homeService: HomeService
	) { };
	recently : {}[];

	getRecentlyViewed(): void {
	    this.homeService.getRecentlyViewed().then(recently => this.recently = recently);
	};

	ngOnInit(): void {
		this.getRecentlyViewed();
  	}
}