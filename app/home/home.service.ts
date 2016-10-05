import { Injectable }		from '@angular/core';
import { Headers, Http }		from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
	
	constructor(private http: Http) {}
	getRecentlyViewed() : Promise {
		return Promise.resolve(RECENTLY_REVIEWED);
	}
}