import {
  ORDERS,
  ADD_ORDER,
} from '../actions/orders'

const orders = ( state = [], action ) => {
  switch (action.type) {
    case ORDERS: 
      return action.orders
    case ADD_ORDER:
      return [action.order, ...state]
    default:
      return state
  }
}

export default orders