import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {APP_BASE_HREF} from '@angular/common';


import {SearchComponent} from './components/search/search.component';
import {MenuComponent} from './components/menu/menu.component';
import {HeaderComponent} from './components/header/header.component';
import {MapComponent} from './components/map/map.component';
import {DetailsComponent} from './components/details/details.component';

import {AppRoutingModule} from './app-routing.module';
import {AppLoadService} from './services/app-load.service';
import {ConfigService} from './services/config.service';
import {HttpClientModule} from '@angular/common/http';
import {CityDatasService} from './services/city-datas.service';


export function init_app(appLoadService: AppLoadService) {
  return () => appLoadService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent,
    HeaderComponent,
    MapComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppLoadService, ConfigService],
      multi: true
    },
    AppLoadService,
    ConfigService,
    CityDatasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
