import { Injectable }		from '@angular/core';
import { Headers, Http }		from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { RECENTLY_REVIEWED }	from '../mock-data';


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
}