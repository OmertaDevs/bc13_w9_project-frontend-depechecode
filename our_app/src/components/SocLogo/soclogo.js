import logo from "./logo-51c754388b198e5bbb0d08a971ebbfa2.png"


/**
 * This stores and displays the brand image.
 * @returns 
 */

const SocLogo = ()=> {
    return (
        <div className = "flex flex-col justify-center items-center pt-20">
    
            <img className = "soclogo"src = {logo} alt= "missing" height='400'></img>
        
        </div>
    )
}

export default SocLogo
