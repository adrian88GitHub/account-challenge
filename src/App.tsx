import React, { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Contador } from "./components/Contador";
import { AccountPage } from "./pages/Account/Account";

function App() {
  const [word, setWord] = useState<string>("");
  const [isPalindromo, setIsPalindromo] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPalindromo("");
    setWord(e.target.value);
  };
  const checkPalindromo = () => {
    const wordCleaned = word.trim().toLocaleLowerCase().replace(/ /g, "");
    const wordReverse = wordCleaned.split("").reverse().join("");
    setIsPalindromo(
      wordCleaned === wordReverse ? "es palindromo" : "no es palindromo"
    );
  };
  return (
    <div className="App">
      <input type="text" value={word} onChange={handleChange} />
      <input type="button" value="es palindromo" onClick={checkPalindromo} />
      {isPalindromo && <p>{isPalindromo}</p>}
      <Contador />
      <AccountPage />
    </div>
  );
}

export default App;
