import { Component, Input }			from '@angular/core';

@Component({
	selector : 'shop-only-shop',
	templateUrl : './app/view/home/shop-only-shop.component.html'
})

export class ShopOnlyShopComponent {
	@Input()
	shopOnlyShop;
}