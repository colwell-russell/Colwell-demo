/**
 * Created by russellcolwell on 3/18/18.
 */
import { ConfigProvider } from '../config/ConfigProvider'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class LoLItemsProvider {

  private itemsUrl: string = "http://ddragon.leagueoflegends.com/cdn/" + this.config.lol_version + "/data/en_US/item.json";
  public itemImageUrl: string = "http://ddragon.leagueoflegends.com/cdn/" + this.config.lol_version + "/img/item/";
  private items: any;

  constructor(private http: HttpClient, private config: ConfigProvider){
    this.load();
  }

  getItemData(): Observable<any>{
    return this.http.get(this.itemsUrl);
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getItemData()
        .subscribe(response => {
          this.items = response['data'];
          resolve();
        }, err => resolve(err))
    });
  }

  getItems(){
    return this.items;
  }
}
