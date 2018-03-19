import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoLChampionsProvider } from '../../providers/LoLChampionsProvider/LoLChampionsProvider';
import { LoLItemsProvider } from '../../providers/LoLItemsProvider/LoLItemsProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[LoLChampionsProvider, LoLItemsProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, public championProvider: LoLChampionsProvider, public itemsProvider: LoLItemsProvider) {

  }

  showChampions(){
    console.log(this.championProvider.getChampions());
  }

  showItems(){
    console.log(this.itemsProvider.getItems());
  }

}
