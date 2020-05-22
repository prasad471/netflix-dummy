import { createAction } from "redux-actions";
import { apiPayloadCreator } from "../utils/appUtils";
import { API, SET_MOVIES, GET_MOVIES, SELECT_MOVIE } from "../constants/actionTypes";
import { normalize, schema } from "normalizr";

const getMoviesAC = createAction(API, apiPayloadCreator);
export const getMovies = () =>
  getMoviesAC({ url: "/movies", onSuccess: setMovies, label: GET_MOVIES });

function setMovies(movies) {
  const movieSchema = new schema.Entity("movies");
  const movieListSchema = new schema.Array(movieSchema);
  const normalizedData = normalize(movies, movieListSchema);
  console.log(normalizedData);
  return {
    type: SET_MOVIES,
    payload: normalizedData.entities.movies,
  };
}

export const selectMovie = createAction(SELECT_MOVIE);
