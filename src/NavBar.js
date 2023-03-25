
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <>
        <center>
            <div className="nav">
            
                    <Link to="/">Order</Link>
                    <Link to="/contact">Contact Info</Link>

            </div>
        </center>
        </>
    )
}

export default NavBar;