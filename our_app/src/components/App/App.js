import './App.css';
import Button from '../Button/button'
import SubjectViewer from '../SubjectViewer/subjectviewer'

import React, {useState} from "react"

function App() {
  const[displayList, setDisplayList] = useState("")
  const[text, setText] = useState("")

  function handleChange(event) {
    const newText = event.target.value;
    setText(newText)
  }

  function handleClick() {
    
    setDisplayList({text})
    console.log(displayList)
  }

  return (
    <div className="App">
      <Button handleClick = {handleClick} text= "search"/>
      <SubjectViewer></SubjectViewer>
    </div>
  );
}

export default App;
