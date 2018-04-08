/**
 * Created by russellcolwell on 3/18/18.
 */
import { ConfigProvider } from '../config/ConfigProvider'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class LoLChampionsProvider {

  private championsUrl: string = "http://ddragon.leagueoflegends.com/cdn/" + this.config.lol_version + "/data/en_US/champion.json";
  private specificChampionUrl: string = "http://ddragon.leagueoflegends.com/cdn/" + this.config.lol_version + "/data/en_US/champion/";
  public passiveAbilityImageUrl: string = "http://ddragon.leagueoflegends.com/cdn/" + this.config.lol_version + "/img/passive/";
  public summonerSpellImageUrl: string = "http://ddragon.leagueoflegends.com/cdn/" + this.config.lol_version + "/img/spell/";
  public championImageUrl: string = "http://ddragon.leagueoflegends.com/cdn/" + this.config.lol_version + "/img/champion/";
  private champions: any;

  constructor(private http: HttpClient, private config: ConfigProvider){
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

  getChampion(champ: string) {
    return this.http.get(this.specificChampionUrl + champ + ".json");
  }
}
