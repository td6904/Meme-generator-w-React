import React from "react";
import searchMeme from "../images/will.png";
// import memesData from "../memesData.js";
//^^Not needed after useEffct()

// export default function Meme() {
//   const [memeImage, setMemeImage] = React.useState("")
// ^^ Have to change from this to vvvv this for refactoring.

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2reqtg.png",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  ////////////////////////////////////////////////
  // NOTE

  /* 
useEffect takes a function as its parameter. If that
function returns something, it needs to be a cleanup
function. Otherwise, it should return nothing. If we
make it an async function, it automatically returns
a promise instead of a function or nothing.
Therefore, if you want to use async operations inside
of useEffect, you need to define the function separately 
inside of the callback function.*/

  /////////////////////////////////////////////////

  // Without sync/await
  // React.useEffect(function() {
  //   fetch(`https://api.imgflip.com/get_memes`)
  //     .then(res => res.json())
  //     .then(data => setAllMemes(data.data.memes))
  //     return () => {

  //     }
  // }, [])

  // With it
  // React.useEffect(async () => {
  //     const res = await fetch(`https://api.imgflip.com/get_memes`)
  //     const data = await res.json();
  //     setAllMemes(data.data.memes)
  //   }, [])

  // How it's written with cleanup function,
  // But don't really need it here, just writing it anyway.
  React.useEffect(function () {
    async function getMemes() {
      const res = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();

    return () => {};
  }, []);

  ////////////////////////////////////////////////

  function getMemeImage() {
    // const memesArray = allMemes.data.memes;
    // ^^ No longer needed after use effect
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   console.log(meme);
  // }
  // Not needed I don't think

  return (
    <>
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
            placeholder="...Then the second..."
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
      </div>
      <div className="submit">
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image
          <img src={searchMeme} alt="will" width="20px" />
        </button>
      </div>
      <div className="meme">
        <h2 className="meme-text-top">{meme.topText}</h2>
        <img src={meme.randomImage} alt="meme" className="main-image" />
        <h2 className="meme-text-bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}
