/**
 * Created by Russell on 4/8/2018.
 */
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoLItemsProvider } from '../../providers/LoLItemsProvider/LoLItemsProvider';

@Component({
  selector: 'item-page',
  templateUrl: 'item-page.html',
  providers:[LoLItemsProvider]
})
export class ItemPage implements OnInit {

  item: any;
  itemMap: any = {};
  items: any;
  maxFromRows: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsProvider: LoLItemsProvider) {
    this.item = navParams.get('item');
    this.items = navParams.get('items');
    this._mapItem();
  }

  ngOnInit() {

  }

  _mapItem(){
    // {
    //   "row1":"1",
    //   "row2":["2","3","4"],
    //   "row3"[
    //     "2":[]
    // }
    if(this.item.from){
      this.itemMap.row2 = this.item.from;

      for(let x in this.item.from){

        if(this.items[this.item.from[x]].from !== undefined){
          if(this.itemMap.row3 === undefined){
            this.itemMap.row3 = {};
          }
          this.itemMap.row3[this.item.from[x]] = this.items[this.item.from[x]].from;
        }
      }
    }
  }

  openItemPage(item: string){
    this.navCtrl.push(ItemPage, {
      item: item,
      items: this.items
    });
  }

  replaceTags(description: any) {

    //Replace NewLines
    if(description != undefined){
      description = description.replace(/<br>/g, "\n");
    }

    //Replace Tags
    if(description != undefined){
      description = description.replace(/<.+?>/g, "");
    }

    return description;
  }

}
