import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", " Thing 2 "] )
    // const cardData = thingsArray.map((item) => <p>{item}</p> ) Not needed in this example.

    
    function addItem() {
      // const newThingText = ` Thing ${thingsArray.length + 1}`
      // thingsArray.push(newThingText); This directly modifies the array and remember not aloud to change the state directly!
      setThingsArray(prevState => [...prevState, `Thing ${prevState.length + 1} `])
      // Array spread [...array], really useful!!!!
      console.log(thingsArray);
    }

  return (
    <>
      <Header />
      <Meme />
      <h1 className="things">{thingsArray}</h1>
      <button onClick={addItem}>Click me</button>
    </>
  );
}
