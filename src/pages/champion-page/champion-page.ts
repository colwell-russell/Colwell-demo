/**
 * Created by Russell on 3/23/2018.
 */
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoLChampionsProvider } from '../../providers/LoLChampionsProvider/LoLChampionsProvider';
import { SpellPage } from '../spell-page/spell-page';

@Component({
  selector: 'champion-page',
  templateUrl: 'champion-page.html',
  providers:[LoLChampionsProvider]
})
export class ChampionPage implements OnInit {

  champion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public championProvider: LoLChampionsProvider) {
    this.champion = navParams.get('champion');
    console.log(this.champion);

    championProvider.getChampion(this.champion.id).subscribe(data => {
      this.champion = data['data'][this.champion.id];
      console.log(this.champion);
    })
  }

  ngOnInit() {

  }

  openSpellPage(spell: any, isPassive: string){
    this.navCtrl.push(SpellPage, {
      spell: spell,
      isPassive: isPassive
    });
  }
}
