import React from "react";
import searchMeme from "../images/will.png";
import memesData from "../memesData.js"

export default function Meme() {
    function handClick() {
        const memesArray = memesData.data.memes
        const randomNumber = [Math.floor(Math.random() * memesArray.length)];
        const url = memesArray[randomNumber].url
        console.log(url)
    }
  return (
    <div className="form">
      <div className="inputs">
        <input
          className="text-bubble"
          type="text"
          placeholder="First piece of text..."
        />
        <input
          className="text-bubble"
          type="text"
          placeholder="... Then the second piece of text"
        />
      </div>
      <div className="submit">
      <button type="submit" onClick={handClick}>
        Get a new meme image
        <img src={searchMeme} alt="will" width="20px" />
      </button>
      </div>
    </div>
  );
}
