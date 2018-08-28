import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';


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

  constructor() {
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
      this.geocoder.geocode({'latLng': e.latLng}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const city = this.searchCityInGoogleDatas(results);
          this.city.emit(Object.assign({}, {lat: e.latLng.lat(), lng: e.latLng.lng()}, city));
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
