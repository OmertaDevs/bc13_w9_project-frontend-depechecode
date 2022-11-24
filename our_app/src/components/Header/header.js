import logo from "./logo-51c754388b198e5bbb0d08a971ebbfa2.png"
import "./header.css"
function Header() {
    return(
        <div className = "header-container">
            <img className = "soclogo"src = {logo} alt= "missing" ></img>
            <h1 className = "banner">Depeche Code</h1>
        </div>
    )
}

export default Header
// style="maxWidth: 50%"