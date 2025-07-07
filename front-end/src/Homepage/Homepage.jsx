import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage(){

    // The navigation changes when the user clicks on either the sign in or the sign up button
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
        <>
        <Navbar pageType="Home Page"/>
        <div id="homepage_div_1">
            
            <h1>Welcome To Lab Management Homepage</h1>

            <div id="homepage_div_1-buttonsDiv">
            <button id="div_1-button_1" type="button" className="btn btn-primary" onClick={goToSignUp}>Sign Up</button>
            <button id="div_1-button_2" type="button" className="btn btn-success" onClick={goToSignIn}>Sign In</button>
            </div>

        </div>
        </>
    );

}

export default Homepage;