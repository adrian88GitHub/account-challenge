export const initialState = {
  count: 0,
};

interface CounterState {
  count: number;
}

type ActionType = {
  type: "incrementar";
};

const contadorReducer = (state: CounterState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default contadorReducer;
