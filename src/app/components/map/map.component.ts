import {Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: google.maps.Map;
  @ViewChild('gmap') gmapElement: any;
  constructor() { }

  ngOnInit() {
    this.loadGMaps();
  }

  private loadGMaps() {
    const loc = {lat: 0, lng: 0};
    const mapProp = {
      center: loc,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }


}
