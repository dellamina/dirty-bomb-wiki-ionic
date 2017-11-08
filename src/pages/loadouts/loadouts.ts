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
	editions: Array<any> = [];
	edition = 'gen2';
	mercs: Array<any> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let loadouts = this.commonProvider.getLoadouts();
		let mercs = this.commonProvider.getMercs();
		let editions = [];
		loadouts.sort((x, y) => 0 - (x.code > y.code ? -1 : 1));
		loadouts.forEach(function(loadout) {
			if( editions[loadout.edition] != undefined ) {
				editions.push( loadout.edition );
			}
		});
		mercs.sort((x, y) => 0 - (x.name > y.name ? -1 : 1));
		this.loadouts = loadouts;
		this.mercs = mercs;
		this.editions = editions;
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

	editionName(edition: string) {
		return 'Generation ' + edition.slice(-1);
	}

}
