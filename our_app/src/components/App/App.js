import React, {useState} from "react"
import './App.css';
import Search from '../Search/search'
import SubjectViewer from '../SubjectViewer/subjectviewer'
import SocLogo from "../SocLogo/soclogo.js"
import Linkbar from '../Linkbar/linkbar'

const App = ()=> {
  const[displayList, setDisplayList] = useState(null)
  const[text, setText] = useState("")

  const handleChange = (event)=> {
    const newText = event.target.value;
    setText(newText)
  }
const handleClick = ()=>{setDisplayList(text)}


  return (
    <div className ="App">
      <br></br>
      <SocLogo></SocLogo>
      <h1 className = "title">Student Hub</h1>
      <Search onClick = {handleClick} onChange = {handleChange}/>
      <SubjectViewer displayList = {displayList}></SubjectViewer>
      <Linkbar/>
    </div>
  );
}

export default App;

