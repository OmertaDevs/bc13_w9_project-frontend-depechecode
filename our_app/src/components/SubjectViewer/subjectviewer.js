import React from "react";

/**
 * Handles the fetch req and then renders the response.
 * @param {} displayList - Value from the input field.
 * @returns
 *
 */
const SubjectViewer = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center p-10 w-6/12">
      <h1 className="font-Open text-2xl text-sky-700 pb-4">
        {data[0]?.subject_name.toUpperCase()}
      </h1>
      <p className="font-Open text-lg text-left text-slate-900 p-4">
        {data[0]?.definition}
      </p>
      {data ? (
        data.map((item) => (
          <a
            className="underline font-Open text-sky-600 text-lg hover:text-emerald-500 "
            key={data.indexOf(item)}
            href={item?.url}
          >
            {item?.resource_name}
          </a>
        ))
      ) : (
        <p className="font-light font-Open text-sky-600 text-md">Loading...</p>
      )}
    </div>
  );
};
export default SubjectViewer;
