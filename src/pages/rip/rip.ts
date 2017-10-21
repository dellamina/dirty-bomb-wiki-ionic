import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-rip',
	templateUrl: 'rip.html',
})
export class RipPage {

	hideNav: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		let merc = this.navParams.data;
		if(merc != null && merc.id != null) {
			console.log( 'merc', merc );
			this.hideNav = true;
		}
		console.log( 'hideNav', this.hideNav, this.navParams.data );
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RipPage');
	}

}
