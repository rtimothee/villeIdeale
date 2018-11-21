import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Town} from '../../models/town/town';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @select() readonly town$: Observable<Town>;

  constructor() {
  }

  ngOnInit() {
  }

}
