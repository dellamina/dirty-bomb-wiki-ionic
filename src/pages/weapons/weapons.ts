import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-weapons',
	templateUrl: 'weapons.html',
})
export class WeaponsPage {

	weapons: Array<any> = [];
	categories: Array<String> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let weapons = this.commonProvider.getWeapons();
		let categories = [];
		weapons.sort((x, y) => { 
			if( categories.indexOf( x.category ) == -1 )
				categories.push( x.category );
			if( categories.indexOf( y.category ) == -1 )
				categories.push( y.category );
			return 0 - (x.name > y.name ? -1 : 1)
		});
		categories.sort((x, y) => 0 - (x > y ? -1 : 1));
		this.categories = categories;
		this.weapons = weapons;
	}

	doFilter(ev: any) {
		this.initializeData();
		let val = ev.target.value;
		if (val && val.trim() != '') {
			this.weapons = this.weapons.filter((x) => {
				return (x.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}

}
