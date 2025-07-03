import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();
    function goToHomePage(){
        navigate("/homepage")
    }

    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Lab Management System</a>
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-success" type="submit" onClick={goToHomePage}>Home</button>
                </form>
            </div>
        </nav>
    );

}

export default Navbar;