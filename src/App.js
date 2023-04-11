import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
    const thingsArray = ["thing 1", "Thing 2"]
    const cardData = thingsArray.map((item) => <p>{item}</p> )

    function addArray() {
      thingsArray.push("another thing");
      console.log(thingsArray);
    }
  return (
    <>
      <Header />
      <Meme />
      <div>
        <button onClick={addArray}></button>
        {cardData}</div>
    </>
  );
}


