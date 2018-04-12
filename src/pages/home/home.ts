import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoLChampionsProvider } from '../../providers/LoLChampionsProvider/LoLChampionsProvider';
import { LoLItemsProvider } from '../../providers/LoLItemsProvider/LoLItemsProvider';

import { ChampionPage } from '../champion-page/champion-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[LoLChampionsProvider, LoLItemsProvider]
})
export class HomePage implements OnInit{

  champions: any
  championKeys: any;
  championSearchText: string;

  constructor(public navCtrl: NavController, public championProvider: LoLChampionsProvider, public itemsProvider: LoLItemsProvider) {

  }

  ngOnInit(){
    this.getChampions();
  }

  getChampions(){
    this.championProvider.getChampionData().subscribe(data => {
      this.champions = data['data'];
      this.championKeys = this.transform(this.champions);
    });
  }

  openChampionPage(champ: string){
    this.navCtrl.push(ChampionPage, {
      champion: champ
    });
  }

  transform(value): any {
    let keys = [];

    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

  filterChampionsByName(event: any){
    if(this.championSearchText.length >= 3){
      let tempChamps = {}
      for(let champ  in this.champions){
        if(this.champions[champ].name.includes(this.championSearchText)){
          tempChamps[champ] = this.champions[champ];
        }
      }
      this.champions = tempChamps;
    }
  }

  resetChampions(){
    this.getChampions();
  }
}
