import './App.css';
import Button from '../Button/button'
import SubjectViewer from '../SubjectViewer/subjectviewer'

import React, {useState} from "react"

function App() {
  const[displayList, setDisplayList] = useState(null)
  const[text, setText] = useState("")

  function handleChange(event) {
    const newText = event.target.value;
    setText(newText)
  }

  function handleClick() {
    setDisplayList(text)
  }

  return (
    <div className="App">
      <Button handleClick = {handleClick} handleChange = {handleChange}/>
      <SubjectViewer displayList = {displayList}></SubjectViewer>
    </div>
  );
}

export default App;
