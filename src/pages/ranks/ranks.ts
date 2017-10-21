import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-ranks',
	templateUrl: 'ranks.html',
})
export class RanksPage {

	ranks: Array<any> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let ranks = this.commonProvider.getRanks();
		ranks.sort((x, y) => 0 - (x.id > y.id ? 1 : -1));
		this.ranks = ranks;
	}

}
