import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-merc-tab-loadouts',
	templateUrl: 'merc-tab-loadouts.html',
})
export class MercTabLoadoutsPage {

	merc: any = {};
	loadouts: Array<any> = [];
	editions: Array<any> = ['gen2', 'gen1'];
	edition = 'gen2';

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let merc = this.navParams.data;
		if(merc != null) {
			this.merc = merc;
		}
		let loadouts = this.commonProvider.getLoadouts(this.merc.id);
		loadouts.sort((x, y) => 0 - (x.code > y.code ? -1 : 1));
		this.loadouts = loadouts;
	}

	imageUrl(name: string) {
		return name.split(' ').join('_');
	}

}