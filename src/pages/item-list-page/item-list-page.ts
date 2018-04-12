import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoLItemsProvider } from '../../providers/LoLItemsProvider/LoLItemsProvider';

import { ItemPage } from '../../pages/item-page/item-page';

@Component({
  selector: 'item-list-page',
  templateUrl: 'item-list-page.html',
  providers:[LoLItemsProvider]
})
export class ItemListPage implements OnInit{

  items: any
  itemKeys: any;
  itemSearchText: string;

  constructor(public navCtrl: NavController, public itemsProvider: LoLItemsProvider) {

  }

  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.itemsProvider.getItemData().subscribe(data => {
      this.items = data['data'];
      this.itemKeys = this.transform(this.items);
      console.log(this.items)
    });
  }

  openItemPage(item: string){
    this.navCtrl.push(ItemPage, {
      item: item,
      items: this.items
    });
  }

  transform(value): any {
    let keys = [];

    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

  filterItemsByName(event: any){
    if(this.itemSearchText.length >= 3){
      let tempItems = {}
      for(let item  in this.items){
        if(this.items[item].name.includes(this.itemSearchText)){
          tempItems[item] = this.items[item];
        }
      }

      this.items = tempItems;
    }
  }

  resetItems(){
    this.getItems();
  }
}
