import { AccountResponseData } from "../interfaces/account";

export const FETCH_DATA = "FETCH_DATA";
export const SET_DATA = "SET_DATA";
export const SET_ERROR = "SET_ERROR";

export const initialState = {
  loadingData: false,
  data: null,
  error: null,
};

interface ResponseDataState {
  loadingData: boolean;
  data: AccountResponseData;
  error: any;
}

type ActionType = {
  type: string;
  payload?: AccountResponseData | any;
};

export const fetchReducer = (state: ResponseDataState, action: ActionType) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loadingData: true,
      };
    case SET_DATA:
      return {
        ...state,
        loadingData: false,
        data: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        loadingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
