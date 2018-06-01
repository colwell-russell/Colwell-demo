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
  championImgSrc:string;

  constructor(public navCtrl: NavController, public championProvider: LoLChampionsProvider, public itemsProvider: LoLItemsProvider) {

  }

  ngOnInit(){
    this.getChampions();
  }

  getChampions(){
    this.championProvider.getChampionData().subscribe(data => {
      this.champions = data['data'];
      this.championKeys = this.transform(this.champions);
      this.champion = this.champions[Object.keys(this.champions)[0]];
      this.championImgSrc = this.championProvider.championImageUrl + this.champion.image.full;
    });
  }

  champChange(newValue){
    this.champion = newValue;
    this.championImgSrc = this.championProvider.championImageUrl + newValue.image.full;
  }

  transform(value): any {
    let keys = [];

    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

}
