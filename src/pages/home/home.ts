import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoLChampionsProvider } from '../../providers/LoLChampionsProvider/LoLChampionsProvider';
import { LoLItemsProvider } from '../../providers/LoLItemsProvider/LoLItemsProvider';
import { JsonToArray } from '../../Pipes/JsonToArray/JsonToArray';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[LoLChampionsProvider, LoLItemsProvider]
})
export class HomePage implements OnInit{

  champions: any
  championKeys: any;

  constructor(public navCtrl: NavController, public championProvider: LoLChampionsProvider, public itemsProvider: LoLItemsProvider) {

  }

  ngOnInit(){
    this.championProvider.getChampionData().subscribe(data => {
      this.champions = data['data'];
      this.championKeys = this.transform(this.champions);
    });
  }

  showChampions(){
    console.log(this.champions);
  }

  showItems(){
    console.log(this.itemsProvider.getItems());
  }

  transform(value): any {
    let keys = [];

    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
