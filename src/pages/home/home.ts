import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	pages: Array<any> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.pages = navParams.get('pages');
	}

	openPage(page) {
		this.navCtrl.setRoot(page.component, {pages: this.pages});
	}

}
