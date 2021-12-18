import axios from "axios";

import { FETCH_GAMES, GET_USER, FETCH_LANDING_PAGE_DATA } from "./actionTypes";

// User fetching in useEffect
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

// updating user state
const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

// logout user and clearinh user from state
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

// user data post on signup-display-name page
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

// browse page games
const getGames = (data) => {
  return {
    type: FETCH_GAMES,
    payload: data,
  };
};

// landing page data
const getLandingPageData = (data) => {
  return {
    type: FETCH_LANDING_PAGE_DATA,
    payload: data,
  };
};

// fetching games in useEffect for landing page and browse page
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

// filter the games on browse page
const filterData = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/games/filters?${query}`,
      {
        withCredentials: true,
      }
    );
    dispatch(getGames(data.data));
  } catch (err) {
    console.log(err);
  }
};

// sorting the games
const sortGames = (data) => (dispatch) => {
  dispatch(getGames(data));
};

// Add to wishlist
const addToWishlist = (id) => async (dispatch) => {
  try {
    await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/user/add-wishlist`,
      {
        gameId: id,
      },
      {
        withCredentials: true,
      }
    );
    dispatch(fetchUser());
  } catch (err) {
    console.log(err);
  }
};

// Add to wishlist
const addToOrders = (id) => async (dispatch) => {
  try {
    await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/user/add-orders`,
      {
        gameId: id,
      },
      {
        withCredentials: true,
      }
    );
    dispatch(fetchUser());
  } catch (err) {
    console.log(err);
  }
};

// remove from wishlist
const removeFromWishlist = (id) => async (dispatch) => {
  try {
    await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/user/remove-wishlist`,
      {
        gameId: id,
      },
      {
        withCredentials: true,
      }
    );
    dispatch(fetchUser());
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
  filterData,
  sortGames,
  addToWishlist,
  addToOrders,
  removeFromWishlist,
};
