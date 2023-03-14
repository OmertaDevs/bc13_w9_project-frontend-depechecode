import React from "react"
import Search from '../Search/search'
import SocLogo from "../SocLogo/soclogo.js"
import Linkbar from '../Linkbar/linkbar'

const App = ()=> {
 

  return (
    <div className="flex flex-col justify-center items-center bg-sky-100 h-screen w-full">
      
      <SocLogo/>
      <h1 className = "font-Open text-8xl text-sky-900 p-10">Student Hub</h1>
      <Search />
      <Linkbar/>
     
      </div>
  );
}

export default App;

