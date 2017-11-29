import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
})
export class AboutPage {

	private isVisible = false;

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	ionViewDidLoad() { }

	toggle = () => {
		this.isVisible = ! this.isVisible;
	}

	openUrl = (url: string) => {
		window.open(url, '_system');
	}

}
