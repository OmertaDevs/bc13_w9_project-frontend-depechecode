import './App.css';
import Button from '../Button/button'
import List from '../List/list'

import React, {useState} from "react"

function App() {
  const[displayList, setDisplayList] = useState("")

  function handleclick() {
    setDisplayList(List)
  }

  return (
    <div className="App">
      <Button handleClick = {handleclick} text= "search"/>
      <List/>
    </div>
  );
}

export default App;
