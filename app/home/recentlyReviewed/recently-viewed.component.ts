import { Component, Input}	from '@angular/core';

@Component ({
	selector : 'recently-viewed',
	templateUrl : './app/view/home/recently-viewed.component.html',

})

export class RecentlyViewedComponent{
	@Input()
  	recentlyViewed: {};
}