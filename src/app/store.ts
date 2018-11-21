import {combineReducers, createStore, Store} from 'redux';
import {Town} from './models/town/town';
import townReducer from './models/town/town.reducer';

export interface IAppState {
  town: Town;
}

const INITIAL_STATE: IAppState = {
  town: null
};

export const store: Store<IAppState> = createStore(combineReducers({
  town: townReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

