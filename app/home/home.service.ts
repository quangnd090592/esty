import { Injectable }		from '@angular/core';
import { Headers, Http }		from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { RECENTLY_REVIEWED, CATEGORY, RECENTLYUPLOADED, SHOPONLYSHOP, KEEPYOUSAFE }	from '../mock-data';


@Injectable()
export class HomeService {
	
	// constructor(private http: Http) {}
	// getQuang() : {}[]{
	// 	return RECENTLY_REVIEWED;
	// }

	getRecentlyViewed() : Promise<{}[]> {
		console.log(RECENTLY_REVIEWED,'RECENTLY_REVIEWED');
		return Promise.resolve(RECENTLY_REVIEWED);
	}

	getCategory() : Promise<{}[]> {
		console.log(CATEGORY,'CATEGORY');
		return Promise.resolve(CATEGORY);
	}

	getRecentlyUploaded() : Promise<{}[]> {
		console.log(RECENTLYUPLOADED,'RECENTLYUPLOADED');
		return Promise.resolve(RECENTLYUPLOADED);
	}

	getShopOnlyShop() : Promise<{}[]> {
		console.log(SHOPONLYSHOP,'SHOPONLYSHOP');
		return Promise.resolve(SHOPONLYSHOP);
	}

	getKeepYouSafe() : Promise<{}[]> {
		console.log(KEEPYOUSAFE,'KEEPYOUSAFE');
		return Promise.resolve(KEEPYOUSAFE);
	}
}