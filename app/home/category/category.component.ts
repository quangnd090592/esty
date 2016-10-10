import { Component, Input}	from '@angular/core';

@Component ({
	selector : 'category',
	templateUrl : './app/view/home/category.component.html',

})

export class CategoryComponent{
	@Input()
  	category: {};
}