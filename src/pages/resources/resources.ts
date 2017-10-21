import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-resources',
	templateUrl: 'resources.html',
})
export class ResourcesPage {

	resources: Array<any> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let resources = this.commonProvider.getResources();
		resources.sort((x, y) => 0 - (x.name > y.name ? -1 : 1));
		this.resources = resources;
	}

	openUrl(url: string) {
		window.open(url, '_system');
	}

}
