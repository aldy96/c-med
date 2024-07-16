import axios from 'axios'; // axios is AJAX for accessing server API
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.get('http://localhost:5000/current_user', {
      headers: {
        'Content-Type': 'application/json'
      }
    }); // waiting for server response

    dispatch({ type: FETCH_USER, payload: res.data }); // send to reducers
  } catch (error) {
    console.error('Error fetching user:', error);
    // Optionally, you can dispatch an error action here if you have a way to handle it in your reducers
    // dispatch({ type: FETCH_USER_ERROR, payload: error.message });
  }
};
