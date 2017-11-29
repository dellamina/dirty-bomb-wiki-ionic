import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ResourcesPage } from '../pages/resources/resources';
import { MercsPage } from '../pages/mercs/mercs';
import { WeaponsPage } from '../pages/weapons/weapons';
import { PerksPage } from '../pages/perks/perks';
import { LoadoutsPage } from '../pages/loadouts/loadouts';
import { RanksPage } from '../pages/ranks/ranks';
import { AboutPage } from '../pages/about/about';

import { CommonProvider } from '../providers/common/common';

@Component({
	templateUrl: 'app.html',
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	pages: Array<any>;

	closeDelay = 2000;
	spamDelay = 500;
	lastBack = Date.now();
	allowClose = false;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private commonProvider: CommonProvider, public menu: MenuController, private toastCtrl: ToastController) {
		this.initializeApp();

		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'Mercs', component: MercsPage },
			{ title: 'Weapons', component: WeaponsPage },
			/*{ title: 'Loadouts', component: LoadoutsPage },*/
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

			this.platform.registerBackButtonAction(() => {

				if(this.menu.isOpen()){
					this.menu.close();
				}
				else if(this.nav.canGoBack()){
					this.nav.pop();
				}
				else if(Date.now() - this.lastBack > this.spamDelay && Date.now() - this.lastBack < this.closeDelay && !this.allowClose) {
					this.allowClose = true;
					let toast = this.toastCtrl.create({
						message: "Press back one more time to exit",
						duration: this.closeDelay,
						dismissOnPageChange: true
					});
					toast.onDidDismiss(() => {
						this.allowClose = false;
					});
					toast.present();
				}
				else if(Date.now() - this.lastBack < this.closeDelay && this.allowClose) {
					this.platform.exitApp();
				}
				this.lastBack = Date.now();
			});

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

	openAbout() {
		this.menu.close();
		this.nav.push(AboutPage);
	}

	openUrl(url: string) {
		window.open(url, '_system');
	}

}
