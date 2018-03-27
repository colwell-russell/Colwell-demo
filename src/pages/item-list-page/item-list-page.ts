import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoLItemsProvider } from '../../providers/LoLItemsProvider/LoLItemsProvider';

@Component({
  selector: 'item-list-page',
  templateUrl: 'item-list-page.html',
  providers:[LoLItemsProvider]
})
export class ItemListPage implements OnInit{

  items: any
  itemKeys: any;

  constructor(public navCtrl: NavController, public itemsProvider: LoLItemsProvider) {

  }

  ngOnInit(){
    this.itemsProvider.getItemData().subscribe(data => {
      this.items = data['data'];
      this.itemKeys = this.transform(this.items);
    });
  }

  openItemPage(item: string){
    console.log(item)
  }

  transform(value): any {
    let keys = [];

    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
