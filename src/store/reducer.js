import {
  GET_USER,
  FETCH_GAMES,
  FETCH_LANDING_PAGE_DATA,
  FILTER_DATA,
} from "./actionTypes";

const initState = {
  user: {}, // user details
  games: [], // browse page data, will be included filters
  landingPageData: [], // data will be divided in deifferent sections
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USER: {
      return {
        ...state,
        user: { ...payload },
      };
    }

    case FETCH_GAMES: {
      return {
        ...state,
        games: [...payload],
      };
    }

    case FETCH_LANDING_PAGE_DATA: {
      return {
        ...state,
        landingPageData: [...payload],
      };
    }

    case FILTER_DATA: {
      return {
        ...state,
        games: [...payload],
      };
    }

    default:
      return state;
  }
};

export default reducer;
