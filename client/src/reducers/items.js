import {
  ITEMS,
} from '../actions/items'

const items = ( state = [], action ) => {
  switch (action.type) {
    case ITEMS: 
      return action.items
    default:
      return state
  }
}

export default items