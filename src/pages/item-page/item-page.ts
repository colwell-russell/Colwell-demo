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
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsProvider: LoLItemsProvider) {
    this.item = navParams.get('item');
    this.items = navParams.get('items');
    console.log(this.item);
    console.log(this.items);
  }

  ngOnInit() {

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

    console.log(description);
    //Replace Tags
    if(description != undefined){
      description = description.replace(/<.+?>/g, "");
    }

    return description;
  }

}
