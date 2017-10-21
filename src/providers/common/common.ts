import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonProvider {

	private loadouts: Array<any> = [];
	private mercs: Array<any> = [];
	private perks: Array<any> = [];
	private weapons: Array<any> = [];
	private resources: Array<any> = [];
	private ranks: Array<any> = [];
	private news: Array<any> = [];
	private rip: any = {};

	constructor(public http: HttpClient) { }

	getLoadout(id: Number) {//Loadout id
		let loadouts = this.clone(this.loadouts);
		let result: any = {};
		for(let loadout of loadouts){
			if(loadout.id === id) {
				result = loadout;
				break;
			}
		}
		let weapons = this.clone(this.weapons);
		for(let weapon of weapons) {// carico sotto elementi Weapons
			if(weapon.id === result.primary) {
				result.primary = weapon;
			}
			if(weapon.id === result.secondary) {
				result.secondary = weapon;
			}
			if(weapon.id === result.melee) {
				result.melee = weapon;
			}
			let perks = this.clone(this.perks);
			for(let perk of perks) {// carico sotto elementi Perks
				if(perk.id === result.perk1) {
					result.perk1 = perk;
				}
				if(perk.id === result.perk2) {
					result.perk2 = perk;
				}
				if(perk.id === result.perk3) {
					result.perk3 = perk;
				}
			}
		}
		return result;
	}

	getLoadouts(id?: Number) {// Merc id
		if(id != undefined) {
			let result: Array<any> = [];
			let loadouts = this.clone(this.loadouts);
			for(let loadout of loadouts) {
				if(loadout.merc_id === id) {
					result.push(loadout);
				}
			}
			for(let loadout of result) {
				let weapons = this.clone(this.weapons);
				for(let weapon of weapons) {// carico sotto elementi Weapons
					if(weapon.id === loadout.primary) {
						loadout.primary = weapon;
					}
					if(weapon.id === loadout.secondary) {
						loadout.secondary = weapon;
					}
					if(weapon.id === loadout.melee) {
						loadout.melee = weapon;
					}
				}
				let perks = this.clone(this.perks);
				for(let perk of perks) {// carico sotto elementi Perks
					if(perk.id === loadout.perk1) {
						loadout.perk1 = perk;
					}
					if(perk.id === loadout.perk2) {
						loadout.perk2 = perk;
					}
					if(perk.id === loadout.perk3) {
						loadout.perk3 = perk;
					}
				}
			}
			return result;
		} else {
			return this.loadouts;
		}
	}

	getMercs(id?: Number) {// Merc id
		if(id != undefined) {
			for(let merc of this.mercs) {
				if(merc.id === id) {
					return merc;
				}
			}
		} else {
			return this.mercs;
		}
	}

	getPerks() {
		return this.perks;
	}

	getWeapons(id?: Number) {// Merc id
		if(id != undefined) {
			let result: any = {primary: [], secondary: [], melee: []};
			let weaponsId: any = {primary: [], secondary: [], melee: []};
			let loadouts = this.clone(this.loadouts);
			for(let loadout of loadouts) {
				if(loadout.merc_id === id) {
					if(weaponsId.primary.indexOf(loadout.primary) == -1)
						weaponsId.primary.push(loadout.primary);
					if(weaponsId.secondary.indexOf(loadout.secondary) == -1)
						weaponsId.secondary.push(loadout.secondary);
					if(weaponsId.melee.indexOf(loadout.melee) == -1)
						weaponsId.melee.push(loadout.melee);
				}
			}
			let weapons = this.clone(this.weapons);
			for(let weapon of weapons) {
				for(let primary of weaponsId.primary) {
					if(weapon.id === primary) {
						result.primary.push(weapon);
					}
				}
				for(let secondary of weaponsId.secondary) {
					if(weapon.id === secondary) {
						result.secondary.push(weapon);
					}
				}
				for(let melee of weaponsId.melee) {
					if(weapon.id === melee) {
						result.melee.push(weapon);
					}
				}
			}
			return result;
		} else {
			return this.weapons;
		}
	}

	getResources() {
		let result = [];
		let resources = this.clone(this.resources);
		for(let resource of resources) {
			if(resource.tags != undefined) {
				resource.tags = resource.tags.split(';');
			}
			result.push(resource);
		}
		return result;
	}

	getRanks() {
		return this.ranks;
	}

	getNews() {
		return this.news;
	}

	getRip() {
		return this.rip;
	}

	loadRip() {
		return this.http.get(`https://dirty-bomb-wiki.firebaseio.com/rip.json`)
			.map((res: any) => res)
			.catch(this.handleError);
	}

	loadData() {
		return this.http.get(`https://dirty-bomb-wiki.firebaseio.com/.json`)
			.map((res: any) => res)
			.catch(this.handleError);
	}

	setData(data: any) {
		this.loadouts = data.loadouts;
		this.mercs = data.mercs;
		this.perks = data.perks;
		this.weapons = data.weapons;
		this.resources = data.resources;
		this.ranks = data.ranks;
		this.news = data.news;
		this.rip = data.rip;
	}

	handleError(error: any) {
		return Observable.throw(error);
	}

	private clone(obj: any) {
		return JSON.parse(JSON.stringify(obj));
	}

}
