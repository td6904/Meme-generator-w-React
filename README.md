# Notes

## Have to revise this section of the course!
react-array-practice on local - from 6:14:46!

Following the React tutorial - https://www.youtube.com/watch?v=bMknfKXIFA8 React Course - Beginner's Tutorial for React JavaScript Library [2022].

Project number 3 - Meme generator. Building a more dynamic webpage.

From 5h10m - Arrays with React and complications.

const thingsArray = ["Thing 1", "Thing 2"]
    const cardData = thingsArray.map((item) => <p>{item}</p> )

    function addArray() {
      const newThingText = `Thing ${thingsArray.length + 1}`
      thingsArray.push(newThingText);
      console.log(thingsArray);
    }

    Example given in App.js ^^^^

# Props vs State

Props are similiar to parameters in a function, recieving from above and not changing. Components are not aloud to modify props - only "configuration".

State - values managed by components but that change.

"Immutable" = Unchanging. Props are immutable. State is mutable.

useState() gives an array. Destructure.

"whichNumber + 1" is better than "whichNumber++" in React. 2nd forbidden.

Callback functions if you need the 'old state.' (Best practice) e.g.
function subtract () {
    setCount(prevCount => prevCount + 1)
}

Note: An arrow function - the => means return.

--------------------------------------------------
Example - remember this!!:

import { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

//Ternary operator example
//isGoingOut ? "Yes" : "No";

export default function App() {
  const [isGoingOut, setIsGoingOut] = useState(true);

  function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <>
      <Header />
      <Meme />
      <div>
        <button onClick={changeMind}>Do I feel like going out tonight?</button>
        <div>
          <h1>{isGoingOut ? "yes" : "no"}</h1>
        </div>
      </div>
    </>
  );
}

--------------------------------------------------------
And this too:

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

