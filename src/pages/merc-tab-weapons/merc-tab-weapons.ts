import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-merc-tab-weapons',
	templateUrl: 'merc-tab-weapons.html',
})
export class MercTabWeaponsPage {

	merc: any = {};
	weapons: Array<any> = [];
	categories: Array<String> = ['primary', 'secondary', 'melee'];
	category: string = 'primary';

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let merc = this.navParams.data;
		if(merc != null) {
			this.merc = merc;
		}
		let weapons = this.commonProvider.getWeapons(this.merc.id);
		/*let categories = [];
		for(let key in weapons) {
			if( categories.indexOf( key ) == -1 )
				categories.push( key );
		}
		categories.sort((x, y) => 0 - (x > y ? -1 : 1));
		this.categories = categories;*/
		this.weapons = weapons;
	}

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

}
