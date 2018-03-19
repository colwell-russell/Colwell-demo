/**
 * Created by russellcolwell on 3/18/18.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class LoLChampionsProvider {

  private championsUrl: string = "http://ddragon.leagueoflegends.com/cdn/8.5.1/data/en_US/champion.json";
  private champions: any;

  constructor(private http: HttpClient){
    this.load();
  }

  getChampionData(): Observable<any>{
    return this.http.get(this.championsUrl);
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getChampionData()
        .subscribe(response => {
          this.champions = response['data'];
          resolve();
        }, err => resolve(err))
      });
  }

  getChampions(){
    return this.champions;
  }
}
