/**
 * Created by Russell on 5/3/2018.
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoLChampionsProvider } from '../../providers/LoLChampionsProvider/LoLChampionsProvider';
import { LoLItemsProvider } from '../../providers/LoLItemsProvider/LoLItemsProvider';

@Component({
  selector: 'build-creator',
  templateUrl: 'build-creator.html',
  providers:[LoLChampionsProvider, LoLItemsProvider]
})
export class BuildCreator implements OnInit{

  champions: any
  championKeys: any;
  champion: any;

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

  transform(value): any {
    let keys = [];

    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

}
