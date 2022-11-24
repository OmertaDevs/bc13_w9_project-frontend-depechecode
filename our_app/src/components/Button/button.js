const Button=({onClick, onChange})=> {
    return(
        <div>
            <input onChange= {onChange} placeholder= "What do you want to recap?"></input>
            <button onClick={onClick}>Search</button> 
        </div>
    )
}

export default Button