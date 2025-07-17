import { useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar(props){

    const navigate = useNavigate();
    function goToHomePage(){
        navigate("/homepage")
    }

    return(
        <nav className="navbar bg-body-tertiary" id="navbar_id">
            <div className="container-fluid">
                <b className="navbar-brand">{props.pageType}</b>
                {/* props.pageType means the type of page user is currently inside, like it can be homepage, dashboard, etc */}

                
            </div>
        </nav>
    );

}

export default Navbar;