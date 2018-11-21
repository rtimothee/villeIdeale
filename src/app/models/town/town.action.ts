import {Town} from './town';

import {AnyAction} from 'redux';
import {Injectable} from '@angular/core';

@Injectable()
export class TownActions {
  static CHANGE_TOWN = 'CHANGE_TOWN';

  changeTown(town: Town): AnyAction {
    return {
      type: TownActions.CHANGE_TOWN,
      payload: town
    };
  }
}
