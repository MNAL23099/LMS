import { useNavigate } from "react-router-dom";

function Navbar(props){

    const navigate = useNavigate();
    function goToHomePage(){
        navigate("/homepage")
    }

    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">{props.pageType}</a>
                {/* props.pageType means the type of page user is currently inside, like it can be homepage, dashboard, etc */}

                <form className="d-flex" role="search">
                    <button className="btn btn-outline-success" type="submit" onClick={goToHomePage}>Home</button>
                </form>
            </div>
        </nav>
    );

}

export default Navbar;