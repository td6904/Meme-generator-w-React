import React from "react";
import searchMeme from "../images/will.png";
import memesData from "../memesData.js"

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
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
      <button type="submit" onClick={getMemeImage}>
        Get a new meme image
        <img src={searchMeme} alt="will" width="20px" />
      </button>
      </div>
      <img src={memeImage} alt="meme" />
    </div>
  );
}
