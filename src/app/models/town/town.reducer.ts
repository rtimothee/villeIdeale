import {TownActions} from './town.action';
import produce from 'immer';

export default function townReducer(state = null, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TownActions.CHANGE_TOWN:
        draft = action.payload;
        break;
    }
    return draft;
  });
}
