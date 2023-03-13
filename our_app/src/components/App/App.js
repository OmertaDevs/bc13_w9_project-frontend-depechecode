import React, {useState} from "react"
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
    <div className="flex flex-col justify-center items-center bg-sky-100 h-screen w-full">
      
      <SocLogo></SocLogo>
      <h1 className = "text-8xl text-sky-900 p-10">Student Hub</h1>
      <Search onClick = {handleClick} onChange = {handleChange}/>
      <SubjectViewer displayList = {displayList}></SubjectViewer>
      <Linkbar/>
     
      </div>
  );
}

export default App;

