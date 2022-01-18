import { useEffect, useReducer } from "react";
import {
  fetchReducer,
  FETCH_DATA,
  initialState,
  SET_DATA,
  SET_ERROR,
} from "./fetchReducer";

export const useFetchData = (url: string) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: FETCH_DATA });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: SET_DATA, payload: data });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR, payload: error });
        console.log(error);
      });
  }, []);

  return {
    ...state,
  };
};
