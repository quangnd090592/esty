import { Component, Input }			from '@angular/core';

@Component({
	selector: 'recently-uploaded',
	templateUrl : './app/view/home/recently-uploaded.component.html'
})

export class RecentlyUploadedComponent{
	@Input()
	recentlyUploaded;
}

