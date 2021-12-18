import axios from "axios";

import { FETCH_GAMES, GET_USER, FETCH_LANDING_PAGE_DATA } from "./actionTypes";

const fetchUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user`,
      {
        withCredentials: true,
      }
    );
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

const logoutUser = () => async (dispatch) => {
  try {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
      withCredentials: true,
    });
    dispatch(getUser({}));
  } catch (err) {
    console.log(err);
  }
};

const postUser = (data) => async (dispatch) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/user/display-name`,
      { ...data },
      { withCredentials: true }
    );

    dispatch(fetchUser());
  } catch (err) {
    console.log(err);
  }
};

const getGames = (data) => {
  return {
    type: FETCH_GAMES,
    payload: data,
  };
};

const getLandingPageData = (data) => {
  return {
    type: FETCH_LANDING_PAGE_DATA,
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
    dispatch(getLandingPageData(data));
    dispatch(getGames(data));
  } catch (err) {
    console.log(err);
  }
};

export {
  fetchGames,
  getGames,
  getUser,
  fetchUser,
  getLandingPageData,
  postUser,
  logoutUser,
};
