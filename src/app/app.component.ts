import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { ResourcesPage } from '../pages/resources/resources';
import { MercsPage } from '../pages/mercs/mercs';
import { WeaponsPage } from '../pages/weapons/weapons';
import { PerksPage } from '../pages/perks/perks';
import { LoadoutsPage } from '../pages/loadouts/loadouts';
import { RanksPage } from '../pages/ranks/ranks';
import { RipPage } from '../pages/rip/rip';

import { CommonProvider } from '../providers/common/common';

@Component({
	templateUrl: 'app.html',
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	pages: Array<any>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private commonProvider: CommonProvider) {
		this.initializeApp();

		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'Mercs', component: MercsPage },
			{ title: 'Weapons', component: WeaponsPage },
			{ title: 'Perks', component: PerksPage },
			{ title: 'Ranks', component: RanksPage },
			{ title: 'Resources', component: ResourcesPage }
		];

	}

	initializeApp() {

		this.platform.ready().then(() => {
			
			this.statusBar.styleDefault();
			if (this.platform.is('android')) {
				this.statusBar.backgroundColorByHexString("#ffc814");
			}

			this.nav.setRoot(HomePage, {pages: this.pages});

			this.commonProvider.loadData().subscribe(
				data => {
					this.commonProvider.setData(data);
					this.splashScreen.hide();
				}
			);

		});
	}

	openPage(page) {
		this.nav.setRoot(page.component, {pages: this.pages});
	}

	openUrl(url: string) {
		window.open(url, '_system');
	}

}