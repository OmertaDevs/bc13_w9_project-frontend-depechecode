/**
 * Takes text as an input and sends it to the main app.
 * @param {string} onClick - Allows button to be clickable.
 * @param {string} onChange - This is tracking what the user puts into the input field.
 * @returns 
 */

const Button = ({onClick, onChange})=> {
    return(
        <div>
            <input onChange = {onChange} placeholder = "What do you want to recap?"></input>
            <button onClick = {onClick}>Search</button> 
        </div>
    )
}

export default Button