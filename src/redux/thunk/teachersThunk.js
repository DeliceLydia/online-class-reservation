import axios from 'axios';
import {
  apiCallStart,
  loadTeachersSuccess,
  loadTeachersFail,
} from '../actions/actionCreators';

const api = 'https://lydia-online-class.herokuapp.com/api/v1';

export const loadTeachersAsync = () => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const response = await axios.get(`${api}/teachers`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('authToken')),
      },
    });
    dispatch(loadTeachersSuccess(response.data));
  } catch (error) {
    dispatch(
      loadTeachersFail(
        error.response ? error.response.data.errors : 'Something went wrong',
      ),
    );
  }
};

export const loadfail = '';
