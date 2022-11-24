import './App.css';
import Button from '../Button/button'
import SubjectViewer from '../SubjectViewer/subjectviewer'
import Header from "../Header/header.js"

import React, {useState} from "react"
import Linkbar from '../Linkbar/linkbar'

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
      <br></br>
      <Header></Header>
      <h1 className = "title">Student Hub</h1>
      <Button handleClick = {handleClick} handleChange = {handleChange}/>
      <SubjectViewer displayList = {displayList}></SubjectViewer>
      <Linkbar/>
    </div>


  );
  
}

export default App;
