import { GET_USER, FETCH_GAMES, FETCH_LANDING_PAGE_DATA } from "./actionTypes";

const initState = {
  user: {},
  games: [],
  landingPageData: [],
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

    default:
      return state;
  }
};

export default reducer;
