import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CityDatasService} from '../../services/city-datas.service';
import {Town} from '../../models/town/town';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {
  @Input() city: Town;

  constructor(private cd: CityDatasService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cd.test().subscribe(datas => {
      console.log(datas);
    });
  }
}
