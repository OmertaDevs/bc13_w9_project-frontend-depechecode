import React, {useState, useEffect} from "react"

function SubjectViewer({displayList}){
    const [data, setData] = useState("");
   
    useEffect(() =>{
        async function getSubject(){
            const response = await fetch(`http://localhost:3000/api/v1/subject?search=react`, {headers: {accept: "application/json", origin: "*"}})
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        getSubject()
    },[displayList])
return (
    <div className="content">
         <h1>{data[0]?.subject_name}</h1>
        <p>{data[0]?.definition}</p>
        <h2>Useful Links</h2>
        <p>{data[0]?.resource_name}</p>
        <li>{data[0]?.url} </li>
        <p>{data[1]?.resource_name}</p>
        <li>{data[1]?.url} </li>
        <p>{data[2]?.resource_name}</p>
        <li>{data[2]?.url}</li>
    </div>
)
}
 export default SubjectViewer