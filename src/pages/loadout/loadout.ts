import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-loadout',
	templateUrl: 'loadout.html',
})
export class LoadoutPage {

	loadout: any = {};

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		let loadout = navParams.get('loadout');
		if(loadout != null) {
			this.loadout = this.commonProvider.getLoadout(loadout.id);
		}
	}

	ionViewDidLoad() { }

	imageUrl(name: string) {
		return name.split(' ').join('_');
	}

}
