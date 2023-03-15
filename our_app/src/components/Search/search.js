/**
 * Takes text as an input and sends it to the main app.
 * @param {string} onClick - Allows button to be clickable.
 * @param {string} onChange - This is tracking what the user puts into the input field.
 * @returns
 */
import React, { useState, useEffect } from "react";
import SubjectViewer from "../SubjectViewer/subjectviewer";

/**
 * Sends the fetch to our api
 * @returns {promise <getSubject.getSubjectResponse}
 */

const Search = () => {
  const [displayList, setDisplayList] = useState("empty");
  const [text, setText] = useState("empty");
  const [data, setData] = useState("");

  useEffect(() => {
    const getSubject = async () => {
      if (displayList === "") {
        setData([]);
      } else {
        const response = await fetch(
          `http://localhost:3000/api/v1/subject?search=${displayList}`,
          { headers: { accept: "application/json" } }
        );
        const data = await response.json();

        setData(data.payload);
      }
    };
    getSubject();
  }, [displayList]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const handleClick = () => {
    setDisplayList(text);
    console.log(text);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex justify-center">
        <input
          className="font-Open border-box border-2 h-12 w-80 shadow-sm shadow-sky-900 rounded-sm border-sky-900 placeholder-slate-400 bg-slate-50 text-sky-700 text-md text-center placeholder:text-slate-400 placeholder:font-light"
          onChange={handleChange}
          placeholder="What do you want to recap?"
        ></input>
        <button
          className="font-Open border-box border-2 h-12 w-20 border-sky-900 shadow-sm shadow-sky-900 bg-sky-400 rounded-sm hover:bg-emerald-500 text-sky-900 hover:text-sky-100 font-bold"
          onClick={handleClick}
        >
          GO
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <SubjectViewer data={data} />
      </div>
    </div>
  );
};

export default Search;
