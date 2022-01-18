import { useReducer } from "react";
import contadorReducer, { initialState } from "../hooks/counterReducer";

export const Contador = () => {
  const [state, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <>
      <h1>hook use reducer</h1>
      {state.count}
      <button onClick={() => dispatch({ type: "incrementar" })}>inc</button>
    </>
  );
};
