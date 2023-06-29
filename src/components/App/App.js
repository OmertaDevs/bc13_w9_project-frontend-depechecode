import React from "react";
import Search from "../Search/search";
import SocLogo from "../SocLogo/soclogo.js";
import Linkbar from "../Linkbar/linkbar";

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-sky-100">
      <div className="flex-1 flex flex-col justify-center items-center">
        <SocLogo />
        <Search />
      </div>
      <div className="bg-sky-100">
        <Linkbar />
      </div>
    </div>
  );
};

export default App;
