import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import items from './items'
import orders from './orders'


const rootReducer = combineReducers({
  user,
  flash,
  items,
  orders,
});

export default rootReducer;
