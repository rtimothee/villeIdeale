/// <reference types="@types/googlemaps" />

import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Town} from '../../models/town/town';
import {IAppState} from '../../store';
import {NgRedux} from '@angular-redux/store';
import {TownActions} from '../../models/town/town.action';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: google.maps.Map;
  geocoder: google.maps.Geocoder;
  loc_datas: any = {
    'city': 'locality',
    'zipcode': 'postal_code',
    'department': 'administrative_area_level_2',
    'region': 'administrative_area_level_1'
  };
  @Output() city: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('gmap') gmapElement: any;

  constructor(private ngRedux: NgRedux<IAppState>, private townActions: TownActions) {
  }

  ngOnInit() {
    this.loadGMaps();
  }

  private loadGMaps() {
    const loc = {lat: 45.8037023, lng: 2.4138217};
    const mapProp = {
      center: loc,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.geocoder = new google.maps.Geocoder();

    this.map.addListener('click', (e) => {
      this.geocoder.geocode({'location': e.latLng}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const datas = this.searchCityInGoogleDatas(results);
          console.log('click : ', datas);
          const city = new Town(datas.city, e.latLng.lat(), e.latLng.lng(), datas.department, datas.zipcode, datas.region);
          this.ngRedux.dispatch(this.townActions.changeTown(city));
        }
      });
    });
  }

  private searchCityInGoogleDatas(gd: any): any {
    const result = {};

    if (gd.length > 0 && typeof gd[0].address_components !== 'undefined') {
      for (let i = 0; i < gd[0].address_components.length; i++) {
        for (const key in this.loc_datas) {
          if (gd[0].address_components[i].types.indexOf(this.loc_datas[key]) !== -1) {
            result[key] = gd[0].address_components[i].long_name;
          }
        }
      }
    }
    return result;
  }
}
