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
        <h1 />
        <p />
        <h2>Useful Links</h2>
        <li />
        <li />
        <li />
    
    </div>
)
}
 export default SubjectViewer