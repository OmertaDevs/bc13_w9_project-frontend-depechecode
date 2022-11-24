import React, {useState} from "react"
import './App.css';
import Button from '../Button/button'
import SubjectViewer from '../SubjectViewer/subjectviewer'
import Header from "../Header/header.js"
import Linkbar from '../Linkbar/linkbar'

const App=()=> {
  const[displayList, setDisplayList] = useState(null)
  const[text, setText] = useState("")

  const handleChange=(event)=> {
    const newText = event.target.value;
    setText(newText)
  }
const handleClick=()=>{setDisplayList(text)}


  return (
    <div className="App">
      <br></br>
      <Header></Header>
      <h1 className = "title">Student Hub</h1>
      <Button onClick = {handleClick} onChange = {handleChange}/>
      <SubjectViewer displayList = {displayList}></SubjectViewer>
      <Linkbar/>
    </div>
  );
}

export default App;

