import { GET_USER, FETCH_GAMES } from "./actionTypes";

const initState = {
  user: {},
  games: [],
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

    default:
      return state;
  }
};

export default reducer;
