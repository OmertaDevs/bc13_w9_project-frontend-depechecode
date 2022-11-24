function Button({handleClick, handleChange}) {
    return(
        <div>
            <input onChange= {handleChange}></input>
            <button onClick={handleClick}>Search</button> 
        </div>
    )
}

export default Button