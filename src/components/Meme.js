import React from "react";
import searchMeme from "../images/will.png";
import memesData from "../memesData.js";

// export default function Meme() {
//   const [memeImage, setMemeImage] = React.useState("")
// ^^ Have to change from this to vvvv this for refactoring.

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   console.log(meme);
  // }
  // Not needed I don't think

  return (
    <div className="form">
      <div className="inputs">
        <input
          className="text-bubble"
          type="text"
          placeholder="First piece of text..."
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          className="text-bubble"
          type="text"
          placeholder="... Then the second piece of text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
      </div>
      <div className="submit">
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image
          <img src={searchMeme} alt="will" width="20px" />
        </button>
      </div>
      <div className="meme">
      <img src={meme.randomImage} alt="meme" className="main-image" />
      <h2 className="meme-text-top">{meme.topText}</h2>
      <h2 className="meme-text-bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
