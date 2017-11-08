import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MercTabStatsPage } from '../merc-tab-stats/merc-tab-stats';
import { MercTabLoadoutsPage } from '../merc-tab-loadouts/merc-tab-loadouts';
import { MercTabWeaponsPage } from '../merc-tab-weapons/merc-tab-weapons';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-merc',
	templateUrl: 'merc.html',
})
export class MercPage {

	merc: any = {};
	tabStats: any;
	tabLoadouts: any;
	tabWeapons: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		let merc = navParams.get('merc');
		if(merc != null) {
			this.merc = merc;
		}
		this.tabStats = MercTabStatsPage;
		this.tabLoadouts = MercTabLoadoutsPage;
		this.tabWeapons = MercTabWeaponsPage;
	}

	ionViewDidLoad() { }

}
