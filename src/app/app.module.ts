import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { DetailsComponent } from './details/details.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
