import axios from "axios";

import { FETCH_GAMES, GET_USER } from "./actionTypes";

const fetchUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:2930/user`, {
      withCredentials: true,
    });
    console.log({ data });
    dispatch(getUser(data.user));
  } catch (err) {
    console.log(err);
  }
};

const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

const getGames = (data) => {
  return {
    type: FETCH_GAMES,
    payload: data,
  };
};

const fetchGames = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/games`,
      {
        withCredentials: true,
      }
    );
    dispatch(getGames(data));
  } catch (err) {
    console.log(err);
  }
};

export { fetchGames, getGames, getUser, fetchUser };
