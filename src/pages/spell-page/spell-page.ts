/**
 * Created by Russell on 3/25/2018.
 */
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoLChampionsProvider } from '../../providers/LoLChampionsProvider/LoLChampionsProvider';

@Component({
  selector: 'spell-page',
  templateUrl: 'spell-page.html',
  providers:[LoLChampionsProvider]
})
export class SpellPage implements OnInit {

  spell: any;
  isPassive: false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public championProvider: LoLChampionsProvider) {
    this.spell = navParams.get('spell');
    this.isPassive = navParams.get('isPassive');
    console.log(this.isPassive);
  }

  ngOnInit() {

  }

  processTip(tip: string){

    //Replace effects
    if(this.spell.effect){
      for(let i = 1; i < this.spell.effect.length; i++){
        var pattern = "{{ e" + i + " }}";
        tip = tip.replace(pattern, this.spell.effect[i][0]);
      }
    }

    //Replace vars
    for(let i in this.spell.vars){
      var pattern2 = "{{ " + this.spell.vars[i].key + " }}";
      tip = tip.replace(pattern2, this.spell.vars[i].coeff);
    }

    //Replace Tags
    if(tip != undefined){
      tip = tip.replace(/<.+?>/g, "");
    }
    return tip;
  }

}
