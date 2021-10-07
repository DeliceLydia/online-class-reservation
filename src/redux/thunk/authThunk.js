import axios from 'axios';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import {
    apiCallStart,
    registerUserSuccess,
    registerUserFail,
    loginUserSuccess,
    loginUserFail,
    signoutUserSuccess,
} from '../actions/actionCreators';

const api = 'http://localhost:3000/api/v1';

export const registerUserAsync = (user) => async (dispatch) => {
    dispatch(apiCallStart());
    try {
        const response = await axios.post(`${api}/users`, user);
        dispatch(registerUserSuccess(response.data));
        toast.success('user registered successfully');
    } catch (error) {
        dispatch(registerUserFail(error.response ? error.response.data.error : 'went wrong'));
        toast.error(error.response ? error.response.data.error : ' went wrong');
    }
};

export const loginUserAsync = (user) => async (dispatch) => {
    dispatch(apiCallStart());
    try {
      const response = await axios.post(`${api}/authentications`, user);
      const { auth_token }  = response.data;
      const data = jwtDecode(auth_token);
      
     
      dispatch(loginUserSuccess(data));
      localStorage.setItem('auth_token', JSON.stringify(auth_token));
     
      toast.success('user login succesffuly');
    } catch (error) {
      dispatch(loginUserFail(error.response ? error.response.data.error : 'Something went wrong'));
      toast.error(error.response ? error.response.data.error : 'Something went wrong');
    }
  };
  
  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('authToken');
    dispatch(signoutUserSuccess());
  };
  