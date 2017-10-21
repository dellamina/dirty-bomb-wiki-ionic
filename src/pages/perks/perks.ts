import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-perks',
	templateUrl: 'perks.html',
})
export class PerksPage {

	perks: Array<any> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let perks = this.commonProvider.getPerks();
		perks.sort((x, y) => 0 - (x.name > y.name ? -1 : 1));
		this.perks = perks;
	}

	doFilter(ev: any) {
		this.initializeData();
		let val = ev.target.value;
		if (val && val.trim() != '') {
			this.perks = this.perks.filter((x) => {
				return (x.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}

	imageUrl(name: string) {
		return name.split(' ').join('_');
	}

}
