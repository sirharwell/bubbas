import axios from 'axios';

export const updateUser = (id, user) => {
  return (dispatch) => {
    let { name, email } = user;
    let data = new FormData()
    let url = `/api/users/${id}?name=${name}&email=${email}`
    axios.put(url, data)
      .then( res => {
        dispatch({ 
          type: 'USER', 
          user: res.data, 
          headers: res.headers
        })
      });
  }
}
