import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { ResourcesPage } from '../pages/resources/resources';
import { MercsPage } from '../pages/mercs/mercs';
import { MercPage } from '../pages/merc/merc';
import { MercTabStatsPage } from '../pages/merc-tab-stats/merc-tab-stats';
import { MercTabLoadoutsPage } from '../pages/merc-tab-loadouts/merc-tab-loadouts';
import { MercTabWeaponsPage } from '../pages/merc-tab-weapons/merc-tab-weapons';
import { WeaponsPage } from '../pages/weapons/weapons';
import { PerksPage } from '../pages/perks/perks';
import { LoadoutsPage } from '../pages/loadouts/loadouts';
import { LoadoutPage } from '../pages/loadout/loadout';
import { RanksPage } from '../pages/ranks/ranks';
import { RipPage } from '../pages/rip/rip';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { IonicImageLoader } from 'ionic-image-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipsModule } from 'ionic-tooltips';

import { CommonProvider } from '../providers/common/common';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		NewsPage,
		ResourcesPage,
		MercsPage,
		MercPage,
		MercTabStatsPage,
		MercTabLoadoutsPage,
		MercTabWeaponsPage,
		WeaponsPage,
		PerksPage,
		LoadoutsPage,
		LoadoutPage,
		RanksPage,
		RipPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			tabsPlacement: 'bottom'
		}),
		HttpClientModule,
		IonicImageLoader.forRoot(),
		BrowserAnimationsModule,
		TooltipsModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		NewsPage,
		ResourcesPage,
		MercsPage,
		MercPage,
		MercTabStatsPage,
		MercTabLoadoutsPage,
		MercTabWeaponsPage,
		WeaponsPage,
		PerksPage,
		LoadoutsPage,
		LoadoutPage,
		RanksPage,
		RipPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		InAppBrowser,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		CommonProvider,
	]
})
export class AppModule {}
