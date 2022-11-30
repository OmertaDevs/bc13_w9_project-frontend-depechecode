import logo from "./logo-51c754388b198e5bbb0d08a971ebbfa2.png"
import "./soclogo.css"

/**
 * This stores and displays the brand image.
 * @returns 
 */

const SocLogo = ()=> {
    return(
        <div className = "header-container">
            <img className = "soclogo"src = {logo} alt= "missing" ></img>
        </div>
    )
}

export default SocLogo
