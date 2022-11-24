function Button({handleClick, handleChange}) {
    return(
        <div>
            <input onChange= {handleChange} placeholder= "search"></input>
            <button onClick={handleClick}>Search</button> 
        </div>
    )
}

export default Button