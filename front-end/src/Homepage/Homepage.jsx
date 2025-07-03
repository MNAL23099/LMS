import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage(){

    const navigation = useNavigate();
    function goToSignUp(e){
        e.preventDefault();
        navigation("/signup");
    }
    function goToSignIn(e){
        e.preventDefault();
        navigation("/signin");
    }

    return(

        <div id="div_1">
            <Navbar />
            <h1>Welcome To Lab Management Homepage</h1>
            <button type="button" className="btn btn-primary" onClick={goToSignUp}>Sign Up</button>
            <button type="button" className="btn btn-success" onClick={goToSignIn}>Sign In</button>

        </div>
    );

}

export default Homepage;