import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  currentCity: any = null;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  updateCity(city: any): void {
    this.currentCity = city;
    console.log(city);
    this.ref.detectChanges();
  }

}
