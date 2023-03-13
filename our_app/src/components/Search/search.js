/**
 * Takes text as an input and sends it to the main app.
 * @param {string} onClick - Allows button to be clickable.
 * @param {string} onChange - This is tracking what the user puts into the input field.
 * @returns 
 */

const Search = ({onClick, onChange})=> {
    return(
        <div className="flex justify-center">
            <input className="border-box border-2 h-12 w-80 border-sky-900 placeholder-slate-400 bg-slate-50 text-sky-700 text-xl text-center" onChange = {onChange} placeholder = "What do you want to recap?"></input>
            <button className="border-box border-2 h-12 w-20 border-sky-900 bg-sky-400 hover:bg-emerald-500 text-sky-900 hover:text-sky-100 font-bold" onClick = {onClick}>GO</button> 
        </div>
    )
}

export default Search