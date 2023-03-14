import React from "react";

/**
 * Handles the fetch req and then renders the response.
 * @param {} displayList - Value from the input field.
 * @returns
 *
 */
const SubjectViewer = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="font-Open text-4xl text-sky-700 pb-4">
        {data[0]?.subject_name}
      </h1>
      <p className="font-Open text-md text-slate-900">{data[0]?.definition}</p>
      {data? data.map((item) => (
        <a className="underline" key={data.indexOf(item)} href={item?.url}>
          {item?.resource_name}
        </a>
      )):<p>Loading...</p> }
    </div>
  );
};
export default SubjectViewer;
