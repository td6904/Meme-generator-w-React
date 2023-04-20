import React from "react";
import searchMeme from "../images/will.png";
import memesData from "../memesData.js"

// export default function Meme() {
//   const [memeImage, setMemeImage] = React.useState("")
// ^^ Have to change from this to vvvv this for refactoring.

  export default function Meme() {
    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = (memesArray[randomNumber].url)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
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
      <img src={meme.randomImage} alt="meme" />
    </div>
  );
}
