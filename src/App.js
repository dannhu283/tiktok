import { useState } from "react";

const gifts = ["cpi i9", "ram 32gb rgb", "rbg keyboard"];
function App() {
  // const [counter, setCounter] = useState(1);

  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // };
  // const handleDecrease = () => {
  //   setCounter(counter - 1);
  // };
  const [gift, setGift] = useState("");

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div className="App">
      {/* <div className="container">
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>inCrease</button>
        <button onClick={handleDecrease}>deCrease</button>
      </div> */}

      <div style={{ padding: 32 }}>
        <h1>{gift || "chưa có phần thưởng"}</h1>
        <button onClick={randomGift}>Lấy thưởng</button>
      </div>
    </div>
  );
}

export default App;
