import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { LoadoutPage } from '../loadout/loadout';

@Component({
	selector: 'page-loadouts',
	templateUrl: 'loadouts.html',
})
export class LoadoutsPage {

	loadouts: Array<any> = [];
	mercs: Array<any> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let loadouts = this.commonProvider.getLoadouts();
		let mercs = this.commonProvider.getMercs();
		loadouts.sort((x, y) => 0 - (x.code > y.code ? -1 : 1));
		mercs.sort((x, y) => 0 - (x.name > y.name ? -1 : 1));
		this.loadouts = loadouts;
		this.mercs = mercs;
	}

	doFilter(ev: any) {
		this.initializeData();
		let val = ev.target.value;
		if (val && val.trim() != '') {
			this.loadouts = this.loadouts.filter((x) => {
				return (x.code.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}

	showDetail(loadout: any) {
		this.navCtrl.push(LoadoutPage, { loadout: loadout });
	}

}
