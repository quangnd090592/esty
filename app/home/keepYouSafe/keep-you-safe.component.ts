import { Component, Input}	from '@angular/core';

@Component ({
	selector : 'keep-you-safe',
	templateUrl : './app/view/home/keep-you-safe.component.html',

})

export class KeepYouSafeComponent{
	@Input()
  	data: {};
}