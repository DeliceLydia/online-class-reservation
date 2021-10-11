import axios from 'axios';
import {
  apiCallStart,
  loadTeachersSuccess,
  loadTeachersFail,
} from '../actions/actionCreators';

const api = 'http://localhost:3000/api/v1';

export const loadTeachersAsync = () => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const response = await axios.get(`${api}/teachers`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('auth_token')),
      },
    });
    dispatch(loadTeachersSuccess(response.data));
  } catch (error) {
    dispatch(
      loadTeachersFail(
        error.response ? error.response.data.errors[0] : 'Something went wrong',
      ),
    );
  }
};

export const loadfail = '';
