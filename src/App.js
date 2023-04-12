import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  const [whichNumber, setWhichNumber] = React.useState(0)

  function handleClickPlus() {
    setWhichNumber(whichNumber + 1);
  }

  function handleClickMinus() {
    setWhichNumber(whichNumber - 1);
  }

  return (
    <>
      <Header />
      <Meme />
      <div>{whichNumber}
      <button onClick={handleClickPlus}>++++</button>
      <button onClick={handleClickMinus}>----</button>
      </div>
    </>
  );
}
