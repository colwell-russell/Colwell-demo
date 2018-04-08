import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ChampionPage } from '../pages/champion-page/champion-page';
import { HomePage } from '../pages/home/home';
import { ItemListPage } from '../pages/item-list-page/item-list-page';
import { ListPage } from '../pages/list/list';
import { SpellPage } from '../pages/spell-page/spell-page';

import { ConfigProvider } from '../providers/config/ConfigProvider';
import { LoLChampionsProvider } from '../providers/LoLChampionsProvider/LoLChampionsProvider';
import { LoLItemsProvider } from '../providers/LoLItemsProvider/LoLItemsProvider';

import { JsonToArray } from '../Pipes/JsonToArray/JsonToArray';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export function championsProviderFactory(championsProvider: LoLChampionsProvider) {
  return () => championsProvider.load();
}

export function itemsProviderFactory(itemsProvider: LoLItemsProvider) {
  return () => itemsProvider.load();
}

@NgModule({
  declarations: [
    MyApp,
    ChampionPage,
    HomePage,
    ItemListPage,
    JsonToArray,
    ListPage,
    SpellPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChampionPage,
    HomePage,
    ItemListPage,
    ListPage,
    SpellPage
  ],
  providers: [
    ConfigProvider,
    LoLChampionsProvider,
    LoLItemsProvider,
    StatusBar,
    SplashScreen,
    { provide: APP_INITIALIZER, useFactory: championsProviderFactory, deps: [LoLChampionsProvider], multi: true },
    { provide: APP_INITIALIZER, useFactory: itemsProviderFactory, deps: [LoLItemsProvider], multi: true },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
