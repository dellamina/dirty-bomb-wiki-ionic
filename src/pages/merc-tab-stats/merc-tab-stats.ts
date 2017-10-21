import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-merc-tab-stats',
	templateUrl: 'merc-tab-stats.html',
})
export class MercTabStatsPage {

	merc: any = {};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let merc = this.navParams.data;
		if(merc != null) {
			this.merc = merc;
		}
	}

}
