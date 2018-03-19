import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LoLChampionsProvider } from '../providers/LoLChampionsProvider/LoLChampionsProvider';
import { LoLItemsProvider } from '../providers/LoLItemsProvider/LoLItemsProvider';

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
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
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
