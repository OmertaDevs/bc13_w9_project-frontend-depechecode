function Button({handleClick, text, handleChange}) {
    return(
        <div>
            <input type={text} onChange= {handleChange}></input>
            <button onClick={handleClick}>{text}</button> 
        </div>
    )
}

export default Button