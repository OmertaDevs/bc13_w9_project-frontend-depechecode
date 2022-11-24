function Button({handleClick, handleChange}) {
    return(
        <div classname= "search-container">
            <input onChange= {handleChange} placeholder= "search"></input>
            <button onClick={handleClick}>Search</button> 
        </div>
    )
}

export default Button