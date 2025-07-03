import { Button } from "bootstrap";
import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage(){

    const navigation = useNavigate();
    function goToSignUp(){
        navigation("/signup");
    }

    return(

        <div id="div_1">
            <Navbar />
            <h1>Welcome To Lab Management Homepage</h1>
            <button onClick={goToSignUp}>Sign Up</button>
            <button>Sign In</button>

        </div>

    );
    

}

export default Homepage;