import React, { useState } from "react";
import "./App.css"

function App() {

  const [getItem, setGetitem] = useState("")
  const [setItem, setSetItem] = useState([])

  const getInputValue = () => {
    if (!getItem) {

    } else {
      setSetItem([...setItem, getItem])
      setGetitem("")
    }
  }

  const deleteItem = (index) => {
    const updateItem = setItem.filter((del, delIndex) => {
      return delIndex !== index
    })
    setSetItem(updateItem)
  }

  const deleteAll = () => {
    setSetItem([])
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto todo-box">
            <h1 className="text-center">Simple todo list</h1>
            <div className="todo-header d-flex">
              <input type="text" placeholder="Add todo" value={getItem} onChange={(e) => setGetitem(e.target.value)} />
              <button onClick={getInputValue} className="add">Add</button>
            </div>
            {
              setItem.map((item, index) => {
                return (
                  <div className="todo-body d-flex justify-content-between mt-3" key={index}>
                    <h6>{item}</h6>
                    <button onClick={() => deleteItem(index)} className="delete">delete</button>
                  </div>
                )
              })
            }
            <div className="all-todo-remove my-4">
              <button onClick={deleteAll} className="remove d-block mx-auto py-1">Remove all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
