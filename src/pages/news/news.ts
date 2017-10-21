import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
	selector: 'page-news',
	templateUrl: 'news.html',
})
export class NewsPage {

	news: Array<any> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private commonProvider: CommonProvider) {
		this.initializeData();
	}

	ionViewDidLoad() { }

	initializeData() {
		let news = this.commonProvider.getNews();
		if(news != undefined) {
			this.news = news;
		}
	}

	openUrl(url: string) {
		window.open(url, '_system');
	}

}
