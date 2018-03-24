/**
 * Created by Russell on 3/23/2018.
 */
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'champion-page',
  templateUrl: 'champion-page.html'
})
export class ChampionPage implements OnInit {

  champion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.champion = navParams.get('champion');
  }

  ngOnInit() {

  }

}

