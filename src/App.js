import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"

function App () {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Tambahkan Item
  const TambahkanItem = () => {
    if (newItem){
      setItem(item.concat(newItem));
      setNewItem("");
    }
  }

  return(
    <div>
      <Header />

      <input type = "text" value = {newItem} onChange ={(e) => setNewItem(e.target.value)} placeholder="Tambahkan Item"></input>
      <button onClick={TambahkanItem}>Tambahkan Item</button>

      <p>{item.join(", ")}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Count increment(+1)</button>
      <button onClick={() => setCount(count-1)}>Count increment(-1)</button>
    </div>
  );
}

export default App;