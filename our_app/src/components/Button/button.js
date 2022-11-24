function Button({handleClick, handleChange}) {
    return(
        <div>
            <input onChange= {handleChange} placeholder= "What do you want to recap?"></input>
            <button onClick={handleClick}>Search</button> 
        </div>
    )
}

export default Button