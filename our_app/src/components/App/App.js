import './App.css';
import Button from '../Button/button'
import SubjectViewer from '../SubjectViewer/subjectviewer'

import React, {useState} from "react"

function App() {
  const[displayList, setDisplayList] = useState("")

  function handleClick() {
    
    setDisplayList("React")
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
