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
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

      // Without sync/await
  React.useEffect(function() {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

    // With it
  // React.useEffect(async () => {
  //     const res = await fetch(`https://api.imgflip.com/get_memes`)
  //     const data = await res.json();
  //     setAllMemes(data.data.memes)
  //   }, [])

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
        <pre>{JSON.stringify(allMemes, null, 2)}</pre>
      </div>
      <div className="meme">
      <img src={meme.randomImage} alt="meme" className="main-image" />
      <h2 className="meme-text-top">{meme.topText}</h2>
      <h2 className="meme-text-bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
