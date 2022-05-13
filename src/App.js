import React, { useState } from "react";
import ToDo from "./ToDo"
import InputArea from "./InputArea"
function App() {
  const [items, updateItems] = useState([]);
  function handleClick(item) {
    updateItems((prevItems) => {
      return [...prevItems, item];
    })
  }

  function deleteItem(id) {
    updateItems((prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    })
    console.log("clicked");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        click={handleClick}
      />
      <div>
        <ul>
          {items.map((toDoItem, index) => <ToDo
            key={index}
            id={index}
            name={toDoItem}
            onChecked={deleteItem}
          />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
