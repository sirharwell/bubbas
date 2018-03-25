import axios from 'axios'

export const ORDERS = 'ORDERS'
export const ADD_ORDER = 'ADD_ORDER'

export const getOrders = () => {
  return (dispatch) => {
    axios.get('/api/orders')
      .then( res => {
        dispatch({ type: ORDERS, orders: res.data })
        dispatch({ type: 'HEADERS', headers: res.headers })
      })
  }
}

export const addOrder = (order) => {
  return (dispatch) => {
    axios.post('/api/orders', { order })
      .then( res => {
        dispatch({ type: ADD_ORDER, order: res.data })
        dispatch({ type: 'HEADERS', headers: res.headers })
      })
  }
}