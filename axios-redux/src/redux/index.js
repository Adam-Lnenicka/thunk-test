import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  movies: [],
  //   filter: "RELEASE_DATE",
};

const LOAD_MOVIES = "LOAD_MOVIES";

export const loadMovies = () => async (dispatch) => {
  const apiLink = "https://mocki.io/v1/1c6154ca-a4d2-49e5-ac35-8d5680ed367c";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES,
    payload: moviesData.data,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;
