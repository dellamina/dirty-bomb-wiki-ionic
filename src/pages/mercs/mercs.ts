import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { MercPage } from '../merc/merc';

@Component({
	selector: 'page-mercs',
	templateUrl: 'mercs.html',
})
export class MercsPage {

	mercs: Array<any> = [];
	categories: Array<String> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let mercs = this.commonProvider.getMercs();
		let categories = [];
		mercs.sort((x, y) => { 
			if( categories.indexOf( x.category ) == -1 )
				categories.push( x.category );
			if( categories.indexOf( y.category ) == -1 )
				categories.push( y.category );
			return 0 - (x.name > y.name ? -1 : 1);
		});
		categories.sort((x, y) => 0 - (x > y ? -1 : 1));
		this.categories = categories;
		this.mercs = mercs;
	}


	doFilter(ev: any) {
		this.initializeData();
		let val = ev.target.value;
		if (val && val.trim() != '') {
			this.mercs = this.mercs.filter((x) => {
				return (x.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}

	showDetail(merc: any) {
		this.navCtrl.push(MercPage, { merc: merc });
	}

}
