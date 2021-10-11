import axios from "axios";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import {
  apiCallStart,
  loadReservationsSuccess,
  loadReservationsFail,
  removeToReservationsSuccess,
  removeToReservationsFail,
  addToReservationsSuccess,
} from "../actions/actionCreators";

const api = "http://localhost:3000/api/v1";
const auth_token = JSON.parse(localStorage.getItem("auth_token"));
axios.defaults.headers.common.Authorization = auth_token;

export const addToReservationsAsync = (teacher) => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const auth_token = JSON.parse(localStorage.getItem("auth_token"));
    axios.defaults.headers.common.Authorization = auth_token;
    const { user_id: userId } = jwtDecode(auth_token);
    const response = await axios.post(`${api}/reservations/`, {
      user_id: userId,
      teacher_id: teacher.id,
    });
    dispatch(addToReservationsSuccess(response.data));
    toast.success("Add To Reservations succesffuly");
  } catch (error) {
    dispatch(
      loadReservationsFail(
        error.response ? error.response.data.errors : "Something went wrong"
      )
    );
    toast.error(
      error.response ? error.response.data.errors : "Something went wrong"
    );
  }
};

export const removeToResevationsAsync = (reservationId) => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const auth_token = JSON.parse(localStorage.getItem("auth_token"));
    const response = await axios.delete(
      `${api}/reservations/${reservationId}`,
      {
        headers: {
          Authorization: auth_token,
        },
      }
    );
    dispatch(removeToReservationsSuccess(response.data.data));
    toast.success("Remove To Reservations succesffuly");
  } catch (error) {
    dispatch(
      removeToReservationsFail(
        error.response ? error.response.data.errors : "Something went wrong"
      )
    );
    toast.error(
      error.response ? error.response.data.errors : "Something went wrong"
    );
  }
};

export const loadReservationsAsync = () => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const auth_token = JSON.parse(localStorage.getItem("auth_token"));
    const { user_id: userId } = jwtDecode(auth_token);
    const response = await axios.get(`${api}/reservations/${userId}`, {
      headers: {
        Authorization: auth_token,
      },
    });
    dispatch(loadReservationsSuccess(response.data.data));
  } catch (error) {
    dispatch(
      loadReservationsFail(
        error.response ? error.response.data.errors : "Something went wrong"
      )
    );
  }
};
