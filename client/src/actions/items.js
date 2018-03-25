import axios from 'axios'

export const ITEMS = 'ITEMS'

export const getItems = () => {
  return (dispatch) => {
    axios.get('/api/items')
      .then( res => {
        dispatch({ type: ITEMS, items: res.data })
        dispatch({ type: 'HEADERS', headers: res.headers })
      })
  }
}